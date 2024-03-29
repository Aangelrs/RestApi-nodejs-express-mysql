import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "" ,
    port: process.env.PORT_BD || "",
    database: process.env.DATABASE || "" ,
    user: process.env.USER || "", 
    password: process.env.PASSWORD || ""
}