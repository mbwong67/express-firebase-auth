import express from 'express';
import handlers from './controller';
import middlewares from '../../middleware';
import validator from './validator';

const router = express.Router();

router.post('/login', middlewares.validate(validator.loginValidation), handlers.login);
router.post('/register', middlewares.validate(validator.registerValidation), handlers.register);

module.exports = router;