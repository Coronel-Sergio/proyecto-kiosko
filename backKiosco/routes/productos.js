const express = require("express");
const router = express.Router();

const { getProducts, createProduct, editProduct, deleteProduct } = require("../controllers/productos")

router
  .get("/products", getProducts)
  .post("/products/create", createProduct)
  .put("/products/edit", editProduct)
  .delete ("/products/delete/:id", deleteProduct)


module.exports = router;