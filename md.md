En Terminal;

1.- 
npm install y-

2.-
npm install mysql

En archivo conexion.js;

3.- 
let mysql = require("mysql");

4.-
let conexion = mysql.createConnection({
    host: "localhost",
    database: "visa_site_bd",
    user: "Geo",
    password: "Alfabeto@5"
})

5.- 
conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Conexion exitosa")
    }
})

6.-
conexion.end()

7.- 
const primerosDatos = "SELECT * FROM datos"

8.- 
conexion.query(primerosDatos, function(error, lista) {
    if (error) {
        throw error;
    } else {
        console.log(lista);
        console.log(lista.length)  // Da el numero de registros
        console.log(lista[0]) // También es la posicion de los registros
    }
});

---------------------------------------------

Página DInámica;

*.- 
Hasta este momento hemos creado una página estática, es una conexion que nos permite "CRUD" los datos de la BD desde JS.conexion.
AHora haremos que el formulario pueda ser llenado desde JS, y los datos se queden guardados en la DB.

1.- 

En la Terminal;

npm init y-