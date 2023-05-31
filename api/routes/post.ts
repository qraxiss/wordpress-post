import { Post } from '../controllers/post'
import { Router } from 'express'

const router = Router()

router.post('/', Post.create)

export { router }
