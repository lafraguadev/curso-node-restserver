require('dotenv').config();

const Server = require('./models/server');



const server = new Server();  // instanciamos la clase Server

server.listen(); // ejecutamos el listener de la clase Server