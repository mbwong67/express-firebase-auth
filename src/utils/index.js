import joi from 'joi';
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import config from '../config';

const firebaseConfig = config.firebaseConfig;

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

module.exports = {
    validator : joi.options({ abortEarly: false, allowUnknown: true}),
    db: db,
}