import express from 'express'; 
import cors from "cors"; // capa de seguridad 
import db from "./config/database.js";
import router from "./routes/routes.js";
import AuthRouter from "./routes/auth.js";

const app = express(); 

app.use(express.json()); 
app.use(cors()); 

//Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(router);
app.use(AuthRouter);

export default app;
