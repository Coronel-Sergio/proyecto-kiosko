const { connection } = require("../config/DB");

const allVentas = (req, res) => {
  const query = `select * from Ventas as venta
inner join Empleados as empleado
on venta.id_empleado = empleado.id_empleado
inner join Clientes as cliente
on venta.id_cliente = cliente.id_cliente
inner join Productos as producto
on venta.id_producto = producto.id_producto;`
  connection.query(query, (err, results) => {
    if (err) throw err
    res.json(results)
  });
};

const singleVenta = (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const query = `select * from Ventas as venta
inner join Empleados as empleado
on venta.id_empleado = empleado.id_empleado
inner join Clientes as cliente
on venta.id_cliente = cliente.id_cliente
inner join Productos as producto
on venta.id_producto = producto.id_producto 
where venta.id_venta = '${id}'`;

  connection.query(query, (err, results) => {
    if (err) throw err
    res.send(results)
  });
};

const createVenta = (req, res) => {
  const {id_empleado,id_cliente,id_producto,Fecha_Venta,Cantidad,Precio} = req.body;
  const query =
    "INSERT INTO Ventas (Fecha_Venta, Cantidad, Precio, id_empleado, id_cliente, id_producto) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [Fecha_Venta,Cantidad,Precio,id_empleado,id_cliente,id_producto];

  connection.query(query, values, (err, results) => {
    if (err) throw err
    res.send(results)
  })
};

const editVenta = (req, res) => {
  const id = req.params.id;
  const {id_empleado,id_cliente,id_producto,Fecha_Venta,Cantidad,Precio} = req.body;
  const query =
    "UPDATE Ventas SET id_empleado=?, id_cliente=?, id_producto=?, Fecha_Venta=?, Cantidad=?, Precio=? WHERE id_venta=?";
  const values = [id_empleado,id_cliente,id_producto,Fecha_Venta,Cantidad,Precio, id];
  connection.query(query, values, (err, results) => {
    if (err) throw err
    res.send(results)
  })
};

const eraseVenta = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM Ventas WHERE id_venta=?";
  const values = [id]
  connection.query(query, values, (err, results) => {
    if (err) throw err
    res.send(results)
  })
};

module.exports = {
  allVentas,
  singleVenta,
  createVenta,
  editVenta,
  eraseVenta,
};