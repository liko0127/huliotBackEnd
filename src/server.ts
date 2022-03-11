import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as fileUpload from 'express-fileupload';
import * as morgan from 'morgan'
import config from '~/config'
import * as fs from "fs"
import * as path from "path"
import { handleErrors } from '~/packages/api/middlewares/error'
import router from '~/packages/api/router'
const logStream = fs.createWriteStream(path.join(__dirname, 'backend.log'), { flags: 'a' })
const app = express()
/// will use on production mode
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 400 },
  stream:logStream
}))
app.use(cors())
/*app.use(function(req, res, next) {
  next()
})*/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.use(handleErrors)

export default app
