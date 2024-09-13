const express = require ("express");
const router = express.Router();
const {listarcategorias,editarcategoria,eliminarcategoria,crearcategoria} = require ("../controllers/categorias")


// RUTAS
router.get("/categorias", listarcategorias)
router.put ("/categorias/editar/:id" , editarcategoria )
router.delete("/categorias/eliminar/:id", eliminarcategoria)
router.post ("/categorias/crear", crearcategoria)


module.exports = router;

