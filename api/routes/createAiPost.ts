import { Post } from '../controllers/createAiPost'
import { Router } from 'express'

const router = Router()

router.post('/', Post.create)

export { router }
