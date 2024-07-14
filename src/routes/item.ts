import { Request, Response, Router } from "express";
import { deleteItem, getItems, postItem, updateItem, getItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session";

const router =  Router()

router.get('/', checkJwt, getItems)
router.get('/:id', logMiddleware, getItem)
router.post('/',postItem)
router.put('/:id', logMiddleware, updateItem)
router.delete('/:id', logMiddleware, deleteItem)

export { router }