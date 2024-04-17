import { Router } from 'express';
import userControllers from './controllers/user-controller';

export const router = Router();

router.get('/users', userControllers.getUsers);
router.post('/registration', userControllers.registration);
router.post('/login', userControllers.login);