const { connection } = require("../config/DB")

const getProducts = (req, res) => {
  const query = `select * from Productos P join Categorias C on P.id_categoria = C.id_categoria`

  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results)
  })
}

const createProduct = (req, res) => {
  const {nombreProducto, descripcion, precio, stock, imagen, categoria} = req.body
  const query = `insert into Productos (Nombre_Producto,Descripcion,Precio,Stock,imagen,id_categoria) values ("${nombreProducto}","${descripcion}",${precio},${stock},"${imagen}",${categoria})`
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results)
  })
}

const editProduct = (req, res) => {
  const { id, nombreProducto, descripcion, precio, stock, imagen, categoria } = req.body
  const query = `update Productos set Nombre_Producto="${nombreProducto}", Descripcion="${descripcion}", Precio=${precio}, Stock=${stock}, imagen="${imagen}", id_categoria=${categoria} WHERE id_producto=${id}`

  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results)
  })
}

const deleteProduct = (req, res) => {
  const id = req.params.id;

  const deletePedidosQuery = `DELETE FROM pedidos WHERE id_producto = ${id}`;
  connection.query(deletePedidosQuery, (err, results) => {
    if (err) throw err;
  })
    const deleteProductQuery = `DELETE FROM productos WHERE id_producto = ${id}`;
    connection.query(deleteProductQuery, (err, results) => {
      if (err) throw error
      res.json({
        message: "Producto eliminado correctamente"
      });
    });
  }
module.exports = { getProducts, createProduct, editProduct, deleteProduct}