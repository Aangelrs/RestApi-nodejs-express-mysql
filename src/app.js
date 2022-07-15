import express from "express";
import morgan from "morgan"; 
import "dotenv/config";

//Routes
import taskRoutes from "./routes/task.routes.js";
import welcomeRoutes from "./routes/welcome.routes.js";
//import userRouters from "./routes/user.routes.js";

const app = express();

//Setting - puerto para al servidor
app.set("port", 8000);

//Middlewares - se ejecuta en dev
app.use(morgan("dev"));
app.use(express.json());

//Routes 

app.use("/api" , taskRoutes);
app.use("/" , welcomeRoutes);



export default app;