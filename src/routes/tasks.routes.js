import { Router } from "express";
import { getTasks,
    createTask } from "../controllers/tasks.controlls.js";
const router = Router()
router.get('/task',getTasks)
router.post('/task',createTask)
router.put('/task/:id')
router.delete('/task/:id')
router.get('/task/:id')
export default router

