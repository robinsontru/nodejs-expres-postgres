import { Task } from "../models/Task.js"

export async function getTasks(req, res) {
    try {
      const tasks = await Task.findAll({
//attributes: ["id", "projectId", "name", "done"],
  //      order: [["id", "DESC"]],
      });
      res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  
export async function createTask(req, res) {
    
      const { name, done } = req.body;
      const newTask = await Task.create({
        name,
        done,
      });
      res.json(newTask);
    // } catch (error) {
    //   return res.status(500).json({ message: error.message });
    // }
  }
  