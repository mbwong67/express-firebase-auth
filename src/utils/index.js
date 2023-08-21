import db from './firebase';
import logger from './logger';
import jwt from './jwt';
module.exports = {
    db: db,
    ...logger,
    jwt: jwt
}