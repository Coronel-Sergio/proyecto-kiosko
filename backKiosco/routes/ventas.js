const express = require("express")

const router = express.Router()


const {allVentas,singleVenta,createVenta,editVenta,eraseVenta} = require("../controllers/ventas")

//peticiones http
router.get("/ventas", allVentas) //ver todos los clientes
router.get("/ventas/view/:id", singleVenta) //ver cada cliente
router.post("/ventas/create", createVenta) // crear un cliente
router.put("/ventas/edit/:id", editVenta) // editar cliente
router.delete("/ventas/delete/:id", eraseVenta) // eliminar cliente

module.exports = router