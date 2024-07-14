import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res:Response, next: NextFunction)=> {
    try {
        const jwtByUser = req.headers.authorization 
        if (!jwtByUser) {
            throw new Error('Authorization header missing');
        }
        const jwt= jwtByUser.split(' ').pop()
        const isOk = verifyToken(`${jwt}`)
        if (!isOk){
            res.status(401).send("NO_TIENES_UNA_SESSION_VALIDA")
        }else{
            console.log({jwtByUser})
            next() 
        }
       
        
    } catch (error) {
        console.log(error);
        res.status(400).send('SESSION_NO_VALIDA')
        
    }

}

export {checkJwt}