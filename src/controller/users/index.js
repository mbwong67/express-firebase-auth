import express from 'express';
import handlers from './controller';
import middlewares from '../../middleware';
import validator from './validator';

const router = express.Router();

router.get('/', handlers.getUsers);
router.get('/:id', middlewares.checkAuth, middlewares.checkPermission, handlers.getUser);
router.post('/', middlewares.checkAuth, middlewares.checkPermission, middlewares.validate(validator.createUserValidation), handlers.createUser);
router.put('/:id', middlewares.checkAuth, middlewares.checkPermission, middlewares.validate(validator.updateUserValidation), handlers.updateUser);
router.delete('/:id', middlewares.checkAuth, middlewares.checkPermission, handlers.deleteUser);

module.exports = router;