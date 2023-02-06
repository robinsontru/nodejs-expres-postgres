import { Router } from "express";
import { createProject ,
    getProjects,
    Updateproject,
    delateproject,
    getProject 
} from "../controllers/projects.controlls.js";
const router=Router()
router.get('/projects',getProjects)
router.post('/projects',createProject)
router.put('/projects/:id',Updateproject )
router.delete('/projects/:id',delateproject)
router.get('/projects/:id',getProject)



export default router;