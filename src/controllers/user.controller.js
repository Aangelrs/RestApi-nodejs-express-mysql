import { request } from "express";
import { getConnection } from "../DB/database.js";

//GET datos del usuario
const getUsers = async(req, res) =>{   
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM v_dateUser");
        console.log(result);
        res.json(result);
   } catch (error) {
        res.status(500);
        res.send(error.message);
   }
}
// Agregar usuario por body.
const addUser = async (req, res) =>{
    try {
        const { name, lastName, age, codeUser } = req.body;
        //console.log(name + " lastName: " + lastName + " age: " + age + " codeUser: "+  codeUser);
        if(name === undefined || lastName === undefined || age === undefined || codeUser === undefined){
            res.status(400).json({message: "Bad request. Please fill all field."});
        }else{
            const user = { name, lastName, age, codeUser };
            const connection = await getConnection();
            const result = await connection.query("INSERT INTO users(codeUser, name, lastName, age ) VALUE ('"+ codeUser + "','" + name + "','" + lastName + "','" + age + "')");
            res.json(result);
            console.log(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
//Mostrar tareas y el usuario quien lo creo.
const showUserTask = async(req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM v_userTask");
        res.json(result);
    } catch (error) {
        res.status(500);
        request.send(error.message);
    }
}

const searchTask = async(req, res) =>{
    try {
        console.log(req.params);
        const { codeUser } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM v_userTaskCode WHERE Codigo = ?", codeUser);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getUsers,
    addUser,
    showUserTask,
    searchTask
};
