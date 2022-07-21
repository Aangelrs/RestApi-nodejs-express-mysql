# RestApi-nodejs-express-mysql

Una RestApi, en el cual se pone en practica el GET, PUT, DELETE y POST. Se uso express, MariaDB-Mysql, NodeJs. 


## Rutas

* Bienvenido

```bash
# Ruta de bienvenida.
$ /
```

* User
##### Para este apartado se uso Views en la base de datos.

```bash
# Agregar usuario por query
$ /user/add
# Mostrar usuarios 
$ /user/
# Mostrar las tareas de los usuarios mediante la relacion.
$ /user/showUserTask
# Buscar tareas y a quien pertenece mediante el codigo del usuario. 
$ /user/searchTask/:codeUser

```

* Tareas

```bash
# Agregar Tarea por body
$ /task/add
# Mostrar tareas (datos normales)
$ /task/
# Mostrar tareas (datos completos)
$ /task/taskAll
# Buscar tarea mediante el id - por parametro
$ /task/search/:id
# Eliminar tarea por ID mediante parametro
$ /task/delete/:id
# Actualizar tarea por ID mediante query
$ /task/update/:id

```
