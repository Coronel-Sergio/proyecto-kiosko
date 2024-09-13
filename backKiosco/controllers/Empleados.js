const {connection} = require("../config/DB")

const allEmpleados = (req,res) => {
    
    const query = `select * from Empleados`
    connection.query(query,(err,results)=>{
         if (err) throw err;
         res.send(results)
    })
}

const singleEmpleados = (req,res) => {
      const id = req.params.id
      const query = `select * from Empleados where id_empleado = ${id}`
      connection.query(query,(err,results)=>{
        if (err) throw err;
        res.send(results)
   })
}


const createEmpleados = (req,res) => {
     const {Nombre_Empleado,Apellido_Empleado,Telefono,Correo,Direccion} = req.body

     const query = `insert into Empleados (Nombre_Empleado,Apellido_Empleado,Telefono,Correo,Direccion) values ('${Nombre_Empleado}','${Apellido_Empleado}',${Telefono},'${Correo}','${Direccion}')`

    connection.query(query,(err,results)=>{
        if (err) throw err;
        res.send(results)
    })

}

const editEmpleados = (req,res) => {
    const id = req.params.id
    const {Nombre_Empleado,Apellido_Empleado,Telefono,Correo,Direccion} = req.body

    const query = `update Empleados
                   set Nombre_Empleado = '${Nombre_Empleado}',
                   Apellido_Empleado = '${Apellido_Empleado}',
                   Telefono = ${Telefono},
                   Correo = '${Correo}',
                   Direccion = '${Direccion}' 
                   where id_empleado = ${id} `
      
    connection.query(query,(err,results)=>{
        if (err) throw err;
         res.send(results)
     })       

}

const eraseEmpleados = (req,res) => {
   const id = req.params.id
   const query = `delete from Ventas where id_empleado = ${id}`
   connection.query(query,(err,results)=>{
    if (err) throw err;

   })       
   const queryEmpleado = `delete from Empleados where id_empleado = ${id}`
   connection.query(queryEmpleado,(err,results)=>{
    if (err) throw err;
    res.json({message:"Empleado eliminado"})
   })       

};

module.exports = {allEmpleados,singleEmpleados,createEmpleados,editEmpleados,eraseEmpleados}