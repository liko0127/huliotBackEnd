import Router from 'express-promise-router'
import {
  uploadImage,
  exportToPdf
} from '~/packages/api/resources/pdf/controller'

const router = Router()
router.route('/fileUpload').post(uploadImage)
router.route('/exportToPdf').get(exportToPdf)
export default router
