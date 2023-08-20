import authConfig from './auth';
import firebaseConfig from './firebase';

module.exports = {
    appEnv: process.env.NODE_ENV || 'development',
    firebaseConfig: firebaseConfig,
    ...authConfig
}