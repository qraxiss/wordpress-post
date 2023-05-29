import { Category } from "../controllers/category";
import { Router } from 'express'

const router = Router()

router.post('/', Category.create)
router.get('/', Category.get)
router.patch('/', Category.update)
router.delete('/', Category.remove)

export { router }