const express = require("express");
const router = express.Router();

const {allPedidos,createPedido,editPedidos,deletePedido,singlePedido} = require("../controllers/pedidos");


 router.get("/pedidos",allPedidos);
 router.get("/pedidos/:id",singlePedido);
 router.put("/pedidos/edit/:id",editPedidos);
 router.post("/pedidos/create", createPedido)
 router.delete("/pedidos/delete/:id",deletePedido);

 module.exports = router;
