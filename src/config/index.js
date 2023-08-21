import authConfig from './auth';
import firebaseConfig from './firebase';

module.exports = {
    appEnv: process.env.NODE_ENV || 'development',
    hashSalt: process.env.HASH_SALT || 10,
    firebaseConfig: firebaseConfig,
    ...authConfig
}