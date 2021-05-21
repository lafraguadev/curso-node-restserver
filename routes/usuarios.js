
const { Router } = require('express'); //destructruramos para sacar la funnt. Router()
const {            // destructuramos par importar las funciones del controlador usuario
   usuariosGet,
   usuariosPost,
   usuariosPut,
   usuariosPatch,
   usuariosDelete } = require('../controllers/usuarios'); 

const router = Router(); //llamamos la funcion destructurada

// el homepage lo toma del directorio publico dicho en el middleware
// Api
// toda la funcion que ejecuta la ruta  (req, res) => {} la pasamos a controllers/usuarios igualque la rutas
router.get('/',      usuariosGet ); // nota: sin los () no se ejecuta solo referencia, con los () si se ejecuta la funciona
router.post('/',     usuariosPost);
router.put('/:id',      usuariosPut);  // el id es el nombre del paramentro en en el controlador
router.patch('/',    usuariosPatch);
router.delete('/',   usuariosDelete);




module.exports = router;

