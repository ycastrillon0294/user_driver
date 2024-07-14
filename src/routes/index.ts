import { Router } from "express"
import  { readdirSync } from "fs"


const PATH_ROUTER = `${__dirname}`
const router = Router()

readdirSync(PATH_ROUTER).filter((fileName) => {
    
    const cleanName = fileName.split('.').shift()
    if (cleanName !== 'index'){
        import (`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se esta cargando una ruta..../${cleanName}`);
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export {router}

