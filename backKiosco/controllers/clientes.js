const { connection } = require("../config/DB");

const allClients = (req, res) => {
  const query = "SELECT * FROM Clientes";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

const singleClient = (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const query = "select * from Clientes where id_cliente= ?";
  const values = [id]
  connection.query(query,values, (err, results) => {
    if (err) throw err
    res.send(results)
  });
};

const createClient = (req, res) => {
  const { Nombre_Cliente, Apellido_Cliente, Telefono, Direccion } = req.body;
  const query =
    "INSERT INTO Clientes (Nombre_Cliente, Apellido_Cliente, Telefono, Direccion) VALUES (?, ?, ?, ?)";
  const values = [Nombre_Cliente, Apellido_Cliente, Telefono, Direccion];

  connection.query(query, values, (err, results) => {
    if (err) throw err
    res.send(results)
  })
};

const editClient = (req, res) => {
  const id = req.params.id;
  const { Nombre_Cliente, Apellido_Cliente, Telefono, Direccion } = req.body;
  const query =
    "UPDATE Clientes SET Nombre_Cliente=?, Apellido_Cliente=?, Telefono=?, Direccion=? WHERE id_cliente=?";
  const values = [Nombre_Cliente, Apellido_Cliente, Telefono, Direccion, id];
  connection.query(query, values, (err, results) => {
    if (err) throw err
    res.send(results)
  })
};

const eraseClient = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM Clientes WHERE id_cliente=?";
  const values = [id]
  connection.query(query, values, (err, results) => {
    if (err) throw err
    res.send(results)
  })
};

module.exports = {
  allClients,
  singleClient,
  createClient,
  editClient,
  eraseClient,
};
