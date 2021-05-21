// este archivo lo que contendrá son las funciones que ejecuta cada ruta del api (endpoint)

const { response, request } = require('express');


// funcion que ejecuta cada ruta para usuarios
const usuariosGet = (req = request, res = response) => {
   
   //parseo de query parametros opcionales que venga en la url
   // const query = req.query;
   const { q, nombre='sin nombre',apikey } = req.query;  // destruc. de los parametros para validar solo los que me convengan
                     //nombre='sin nombre' es valor si no viene en parametros el nombre
   console.log(query);

   res.json({
      msg: 'ruta /api/usuarios. get- controlador',
      q,
      nombre,
      apikey
   });
}

const usuariosPost = (req, res=response) => {

   // extraer el body del req.(request)
   const { id, nombre, email } = req.body; // destruc. para que recibamos la data que queremos ,lo de mas se ignora 
                                          //y no todo el json por asuntos de inyecciones de codigo

   res.json({
      msg: 'ruta /api/usuarios. Post - controlador',
      id,
      nombre,
      email

   });
}

const usuariosPut = (req, res=resonse) => {
   const { id } = req.params;  // nombre del parametro que se le manda la ruta (debe ser el mismo nombre)

   res.json({  // stattus 201 = creado correctamente
      msg: 'ruta /api/usuarios. put- controlador',
      id
   })
}

const usuariosPatch = (req, res) => {
   res.status(500).json({
      msg: 'ruta /api/usuarios. patch- controlador'
   });
}

const usuariosDelete = (req, res) => {
   res.json({
      msg: 'ruta /api/usuarios. delete- controlador'
   });
}

module.exports = {
      usuariosGet,
      usuariosPost,
      usuariosPut,
      usuariosPatch,
      usuariosDelete
}