import { getConnection } from "./../DB/database.js";

//Mostrar todo los datos de la Tarea
const getTaskAll = async(request, response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM task");
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
    //response.json("Bienvenido a mi primer Apirest con Nodejs, express y MySql - AngelRs")
};
//Mostrar Tareas
const getTasks = async(req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT nameTask, descriptionTask FROM task");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}
// Buscar una tarea por el codigo de usuario.
const getTaskUser = async(req, res) =>{
    try {
       // console.log(req.params);
        const { codeUser } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT nameTask, descriptionTask FROM task WHERE userCode = ?", codeUser);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


//Guardar una tarea proporcionando los datos.
const addTask = async(req, res) =>{
    try {
        const { nameTask, descriptionTask, codeUser} = req.body;//  Agarra los datos del request y los alamacena en el objeto.
    /*  console.log(nameTask);console.log(descriptionTask); console.log(codeUser); Para probar y ver si esta guardando los datos en las variables*/
        //console.log(req.body); Ver el cuerpo del body completo.
        if( nameTask === undefined || descriptionTask === undefined || codeUser === undefined){
            res.status(400).json({message: "Bad request. Please fill all field."});
        }else{
            const task = { nameTask, descriptionTask, codeUser}; // Almacena en la variable Task.
            const connection = await getConnection(); // forma tradicional de hacer un INSERT.
            const result = await connection.query("INSERT INTO task(nameTask, descriptionTask, codeUser) VALUE ('"+ nameTask + "','" + descriptionTask + "','" + codeUser+ "')");
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//Eliminar una tarea mediante el id
const deleteTask = async(req, res) =>{
    try {
        const { id } = req.params;
        if( id == undefined){
            res.status(400).json({message: "Bad resquest. Please fill all field."});
        }else{
            //const id = { id };
            const connection = await getConnection();
            const result = await connection.query("DELETE FROM task WHERE id = ?", id);
            res.json(result);
            
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//Actualizando mediante el id
const updateTask = async(req , res) => {
    try {
        const { id } = req.params;
        const { nameTask, descriptionTask } = req.body;
        const task = { nameTask, descriptionTask };
        console.log(task);
        if( id === undefined, nameTask === undefined, descriptionTask === undefined){
            res.status(400).json({message: "Bad resquest. Please fill all field."});
        }else{
            const connection = await getConnection();
            const result = await connection.query("UPDATE task set nameTask = '"+ nameTask +"', descriptionTask ='"+ descriptionTask + "' WHERE id = " + id );
            //const result = await connection.query("UPDATE task SET = ? WHERE = ?", [task , id]);
            res.json(result);
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getTaskAll,
    getTasks,
    getTaskUser,
    addTask,
    deleteTask,
    updateTask
};