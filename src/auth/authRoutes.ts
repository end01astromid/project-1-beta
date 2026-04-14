import {Router} from 'express'
import { authController } from './authController'
import { authMiddleware } from '../middle_token/token'

const router = Router()


router.post("/register", authController.register.bind(authController))
router.post("/login", authController.login.bind(authController));
router.get("/myProfile",authMiddleware, authController.myProfile.bind(authController))

export default router;