require("dotenv").config(); //variables de entorno
const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT; //acceso a la variable de entorno PORT
    this.middlewares();
    this.routes();
    this.usuariosPath = "";
  }

  routes() {
    //defino kla direccion donde voy a redireccionar
    this.app.use("/api/usuarios/", require("../routes/users"));
  }

  //Middleware funciones que dan funcionalidad al webserver
  middlewares() {
    //use es para indicar que es un middleware
    this.app.use(express.static("public"));

    //Lectura y parseo del json,intenta serializar a json todas las peticiones que vienen
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Conectado a puerto");
    });
  }
}

module.exports = Server;
