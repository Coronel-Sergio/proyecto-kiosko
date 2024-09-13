const express = require ("express")

const router = express.Router()

const {allProveedores,singleProveedor, createProveedor,editProveedor,  eraseProveedor} = require ("../controllers/proveedores")

router.get("/proveedores/",allProveedores)
router.get("/proveedores/ver/:id",singleProveedor)
router.post("/proveedores/create", createProveedor)
router.put("/proveedores/editar/:id", editProveedor)
router.delete("/proveedores/eliminar/:id",eraseProveedor)

module.exports = router