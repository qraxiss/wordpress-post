import { Wordpress } from '../controllers/wordpressMiddleware'
import { Router } from 'express'

const router = Router()

router.use('/', Wordpress.all)

export { router }
