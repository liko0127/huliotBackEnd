import * as express from 'express'
import userRouter from '~/packages/api/resources/pdf/index'
const router = express.Router()
router.use('/api/v1', userRouter)
export default router
