import  Express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";


const App=Express()



App.use(Express.json())



App.use(projectsRoutes)
App.use(tasksRoutes)
export default App;