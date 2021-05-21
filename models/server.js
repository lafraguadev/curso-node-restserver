const express = require('express');
const cors = require('cors');

class Server {

   constructor() {

      this.app    = express();
      this.port   = process.env.PORT;
      // para saber que rutas dispone la aplicacion
      this.usuariosPath = '/api/usuarios';  // asi tambien se cambiar todas las rutas con solo cambiar aca

      // lectura del req. y parseo de post cuando recibimos datos en el body
      // toda la info que venga de un post, put, delete, la pasa a formato json, USARLO ANTES DE LOS MIDDLEWARES
      this.app.use(express.json());
      
      //middlewares (funciones que añaden otras funcionalidades el webserver)
      this.middlewares();

      //rutas de mi application
      this.routes();


   }

   //metodo para los middlewares (uno ó muchos middlewares)
   middlewares() {
      //CORS
      this.app.use(cors());
      // directorio publico por defecto para ejectur el index.html y otros archivos
      this.app.use(express.static('public'));
      
   }

   //metodo para manejo de las rutas
   routes() {

      //usamos el middleware para enlazar las rutas de user
      this.app.use(this.usuariosPath, require('../routes/usuarios') ) // es el path para el api  /api/usuario

   }

   listen() {

      this.app.listen(this.port, () => {
         console.log('Ejecutando en el puerto ',this.port );  // siempre respetar case sensitive PORT es <> de port
      });
   }

}

module.exports = Server;
