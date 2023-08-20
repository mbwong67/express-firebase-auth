import response from '../response'
import errors from '../error'

module.exports = {
    validate: (validation) => {
        return (req, res, next) => {
            const { error } = validation(req.body);
            if (error) {
                return response.error(res, errors.validationError(error))
            }

            next();
        }
    }
}