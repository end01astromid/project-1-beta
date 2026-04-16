import { Router } from 'express'
import { authController } from './authController'
import { authMiddleware } from '../middle_token/token'
import { todoController } from './todoController'

const router = Router()

router.post("/register", authController.register.bind(authController))
router.post("/login", authController.login.bind(authController))
router.get("/myProfile", authMiddleware, authController.myProfile.bind(authController))

router.post('/todos', authMiddleware, todoController.createTodo.bind(todoController))
router.delete('/todos/:id', authMiddleware, todoController.deleteTodo.bind(todoController))

export default router
