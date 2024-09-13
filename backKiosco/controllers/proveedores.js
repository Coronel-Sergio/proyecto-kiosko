const { connection } = require("../config/DB")

const allProveedores = (req, res) => {
  const query = `SELECT * FROM Proveedores`;
  connection.query(query, (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.send(results);
  });
};

const singleProveedor = (req, res) => {
  const id = req.params.id
  const query = `select * from proveedores where id=${id}`
  connection.query(query, (err, results) => {
      if (err) throw err
      res.send(results)
  })


}

const eraseProveedor = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM Proveedores WHERE id_proveedor = ${id}`
  connection.query(query, (err,results) => {
    if (err) throw err;
    res.send(results)
  })

}


const editProveedor = (req, res) => {
  const id = req.params.id
  const { Nombre_Proveedor, Telefono, Correo_Proveedor } = req.body
  const query = `update Proveedores set Nombre_Proveedor='${Nombre_Proveedor}',Telefono=${Telefono},Correo_Proveedor='${Correo_Proveedor}' WHERE id_proveedor=${id}`
  connection.query(query, (err, results) => {
      if (err) throw err
      res.send(results)

  })
}

const createProveedor = (req, res) => {
  const { Nombre_Proveedor, Telefono, Correo_Proveedor } = req.body
  const query = ` insert into Proveedores (Nombre_Proveedor,Telefono,Correo_Proveedor) values ('${Nombre_Proveedor}',${Telefono},'${Correo_Proveedor}')`

  connection.query(query, (err, results) => {
      if (err) throw err
      res.send(results)

  })
}

module.exports = { allProveedores, singleProveedor, eraseProveedor, editProveedor, createProveedor } 