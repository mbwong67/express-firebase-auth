import validate from './validate';
import auth from './auth';
import requestLogger from './request';

module.exports = {
    ...validate,
    ...auth,
    ...requestLogger
}