const express = require("express")

const router = express.Router()

const {allClients,singleClient,createClient,editClient,eraseClient} = require("../controllers/clientes")

//peticiones http
router.get("/clients", allClients) //ver todos los clientes
router.get("/clients/view/:id", singleClient) //ver cada cliente
router.post("/clients/create", createClient) // crear un cliente
router.put("/clients/edit/:id", editClient) // editar cliente
router.delete("/clients/delete/:id", eraseClient) // eliminar cliente

module.exports = router