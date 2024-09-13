const { connection } = require("../config/DB");
const allPedidos = (req, res) => {
  //HICE CAMBIOS
const query = ` select  pedid.id_pedido,produc.id_producto, prov.id_proveedor, pedid.Fecha_Pedido, pedid.Fecha_Entrega, pedid.Estado_Pedido, prov.Nombre_Proveedor, prov.Telefono, prov.Correo_Proveedor, produc.Nombre_Producto, produc.Precio                  
          from Pedidos as pedid
          inner join Proveedores as prov
          on pedid.id_proveedor = prov.id_proveedor
          inner join Productos as produc
          on pedid.id_producto = produc.id_producto;`;
        connection.query(query, (err, result) => {
          if (err) throw err;
          res.json(result)
                
        });
   };


 const createPedido = (req, res) => {

  const {Fecha_Pedido,Fecha_Entrega,Estado_Pedido,id_proveedor,id_producto} = req.body;
  const query = `insert into Pedidos (Fecha_Pedido,Fecha_Entrega,Estado_Pedido,id_proveedor,id_producto) values 
  ('${Fecha_Pedido}','${Fecha_Entrega}','${Estado_Pedido}','${id_proveedor}','${id_producto}')`;

  connection.query(query, (err, result) => {
    if(err) throw err;
    res.send(result)
  });
};


const editPedidos = (req,res) =>{

 const id = req.params.id;
 const {Fecha_Pedido,Fecha_Entrega,Estado_Pedido,id_proveedor,id_producto} = req.body;

 const query = `update Pedidos
                set Fecha_Pedido = '${Fecha_Pedido}',
                Fecha_Entrega = '${Fecha_Entrega}',
                Estado_Pedido = '${Estado_Pedido}',
                id_proveedor = ${id_proveedor},
                id_producto = ${id_producto}
                where id_pedido = ${id}`;

 connection.query(query,(err,result)=>{
    if(err)throw err;
    res.send(result);
 })
}

const deletePedido = (req,res) =>{

 const id = req.params.id;
 const query = `delete from Pedidos where id_pedido = '${id}'`
 connection.query(query,(err,result)=>{
    if(err) throw err;
    res.send(result);
 })
}

const singlePedido = (reques,res) =>{

    const id = reques.params.id;
    const query = `select producto.Nombre_Producto, producto.imagen,
                   proveedor.Nombre_Proveedor, proveedor.Telefono,
                   pedido.Fecha_Pedido, pedido.Fecha_Entrega, 
                   pedido.Estado_Pedido

                   from Pedidos as pedido
                   inner join Productos as producto
                   on pedido.id_producto = producto.id_producto
                   inner join Proveedores as proveedor
                   on pedido.id_proveedor = proveedor.id_proveedor
                   where pedido.id_pedido = '${id}';`

    connection.query(query,(err,results)=>{
        if(err) throw err;
        res.send(results);
    })
}

module.exports = {allPedidos,createPedido,editPedidos,deletePedido,singlePedido};