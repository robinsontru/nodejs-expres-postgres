import { error } from "qrcode-terminal";
import { Project } from "../models/project.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        return res.status(5000).json({ message: error. Message })
    }
}
 export const getProject= async(req,res)=>{
    try {
        const{id}= req.params
      const projects=  await Project.findOne({
            where:{
                id,
            }
        })
        res.json(projects)
    } catch (error) {
return res.status(5000).json({ Message: error. Message })
    }
 }

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;

    try {
        const newProject = await Project.create(
            {
            name,description, priority,

            })

        res.json(newProject)
    } catch (error) {
return res.status(5000).json({ Message: error. Message })

    }

}

export const Updateproject = async (req, res) => {

    try {
        const {id}=req.params;
        const{name,priority,description}=req.body
        const project = await Project.findByPk(id);
        project.name=name 
        project.priority=priority
        project.description=description 
        await project.save()
        // res.send('udpadatin')
        // console.log(project);
        res.json(project)
    
    } catch (error) {
        return res.status(500).json({Message:error.Message})

    }

}

export const delateproject = async (req, res) => {
    try {
        const {id}=req.params
        console.log(req.params.id);
    
        await Project.destroy({
            where:{
                id,
            }
        })
        res.send('se elimino 2004')
    } catch (error) {
return res.status(500).json({Message:error.Message})
    }
   
}