import {NextFunction, Request, Response} from 'express'
import * as httpStatus from 'http-status'
import config from '~/config'
import axios from 'axios';
import { createCanvas, loadImage ,Image} from 'canvas'
import * as fs from "fs"
import * as path from "path"
export const uploadImage = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const {body,params,query} = req;
    // @ts-ignore
    let imageFile = req.files.image;
    if(imageFile){
        if(!fs.existsSync(path.join(__dirname,'./uploads'))){
            fs.mkdirSync('uploads')
        }
        imageFile.mv(path.join(__dirname,`./uploads/upload.png`));
        res.status(200)
        res.json({});
    } else{
        res.status(500)
        res.json({msg:"No have uploading file"});
    }
}
export const exportToPdf = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    let imgPath = path.join(__dirname,`./uploads/upload.png`);
    let image = await loadImage(imgPath);
    console.log(image.width,image.height)
    const canvasImg = createCanvas(image.width,image.height,'pdf')
    const ctxImg = canvasImg.getContext('2d');
    ctxImg.drawImage(image, 0, 0, image.width,image.height);
    const streamImg = canvasImg.createPDFStream()
    res.status(200);
    streamImg.pipe(res);
}
