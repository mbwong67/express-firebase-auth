import {jwt} from '../utils';
import response from '../response';
import errors from '../error';
import {userPolicies} from "../policies";

module.exports = {
    checkAuth: (req, res, next) => {
        const authHeader = req.headers.authorization || '';
        if (!authHeader) {
            return response.error(res, errors.unauthorizedError());
        }
        const token = authHeader.split(' ')[1];

        try {
            req.user = jwt.verify(token);
            next();
        } catch (e) {
            return response.error(res, errors.unauthorizedError());
        }
    },
    checkPermission: (req, res, next) => {
        const user = req.user;
        const path = req.baseUrl + req.route.path;
        const method = req.method.toLowerCase();
        const policy = userPolicies[method][path];

        if (!policy) {
            return response.error(res, errors.notFoundError());
        }

        if (policy.roles.indexOf(user.role) === -1) {
            return response.error(res, errors.forbiddenError());
        }

        next();
    }
}