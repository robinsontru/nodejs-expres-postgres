import App from "./App.js";
import  {sequelize } from "./database/database.js";
import "./models/project.js"
import "./models/task.js"
async function main(){
    try{

        await sequelize.sync({force:false})
    // await sequelize.authenticate();
    // console.log('Connection has been established successfully.');

    App.listen(4000)
console.log('serve esta corriendo  :)',4000);

}catch (error) {
    console.log(' -----------------------------------------');
    console.error('Unable to connect to the database:', error);
  }
}
main();

