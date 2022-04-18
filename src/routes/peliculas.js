const express = require('express');
const router = express.Router();
const moviesAPIController = require('../controllers/moviesController');
const {page,create,detail,update, edit, destroy} = require('../controllers/moviesController')

//Rutas
//Listado de películas
router.get('/', moviesAPIController.list);
// Facvoritas
router.get('/favoritas',page)
//Creacion
router.get('/create',page)
router.post('/create',create)
//Detalle
router.get('/detail/:id',detail)
//Edicion
router.get('/edit/:id',edit)
router.put('/edit/:id',update)
//Eliminacion
router.delete('/delete/:id',destroy)

module.exports = router;