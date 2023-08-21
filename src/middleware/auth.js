import {jwt} from '../utils';
import response from '../response';
import errors from '../error';

module.exports = {
    checkAuth: (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            return response.error(res, errors.unauthorizedError());
        }

        try {
            req.user = jwt.verify(token);
            next();
        } catch (e) {
            return response.error(res, errors.unauthorizedError());
        }
    }
}