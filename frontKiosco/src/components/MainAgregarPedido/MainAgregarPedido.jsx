/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export const MainAgregarPedido = () => {


  const navigate = useNavigate();

  const[idProduc,setIdProduc] = useState();
  const[idProve,setIdProve] = useState();

  const[fechaPedido,setFechaPedido] = useState();
  const[fechaEntrega,setFechaEntrega] = useState();
  const[estadoPedido,setEstadoPedido] = useState();

  const[proveedores,setProveedores] = useState([]);
  const[productos,setProductos] = useState([]);

  const obtenerDatos = () =>{
    axios.get("http://localhost:8000/pedidos")
    .then(resp =>{
      setProductos(resp.data);
      setProveedores(resp.data);
    })
  }

  const handleSumbit = async(e) =>{
    if(idProve != undefined && idProduc != undefined){
    axios.post("http://localhost:8000/pedidos/create",{
      Fecha_Pedido : fechaPedido,
      Fecha_Entrega: fechaEntrega,
      Estado_Pedido : estadoPedido,
      id_proveedor: idProve,
      id_producto: idProduc
    }).then(navigate("/pedidos"))
  }else{
    alert("Debes seleccionar un producto y un proveedor")
  }
    e.preventDefault();
     
   
   
  }


  
  const handleClickRegresar = () =>{
    navigate("/pedidos")
  }
//NUEVO
  const onChangeProveedor = (e) =>{
    const selectedOption = e.target.options[e.target.selectedIndex];
    const dataId = selectedOption.getAttribute('data-id');
    setIdProve(dataId)
   }
//NUEVO
   const onChangeProducto = (e) =>{
    const selectedOption = e.target.options[e.target.selectedIndex];
    const dataId = selectedOption.getAttribute('data-id');
    setIdProduc(dataId);
  }

  useEffect(()=>{
    obtenerDatos()
   },[]);

  return (
    <div>

    <div className='contenedor-form'>
     <form onSubmit={handleSumbit}>
     <label htmlFor="">Ingresa la fecha en que se solicito el pedido</label>
      <input type="date" id="" placeholder='' onChange={(e)=> setFechaPedido(e.target.value)}  required/>
      
     
      <label htmlFor="">Fecha entrega</label>
      <input type="date"  id="" placeholder='' onChange={(e)=> setFechaEntrega(e.target.value)}  required/>
      
     
     <label>Estado del pedido</label>
     <input type="text"  id="" placeholder='' name = "Estado_Pedido" onChange={(e)=> setEstadoPedido(e.target.value)} required/>
   
      <label htmlFor="">Nombre del proveedor</label>
      <select name="" id="" onChange={(e) => setIdProve(e.target.value)}>
      {proveedores.map(proveedor =>
      <option key={proveedor.id_proveedor} onChange={onChangeProveedor} value={proveedor.id_proveedor} data-id={proveedor.id_proveedor}>{proveedor.Nombre_Proveedor} </option>
      )}
     </select>

     <label htmlFor="">Nombre del producto</label>
     <select name="" id="" onChange={(e) => setIdProduc(e.target.value)}>
      {productos.map(producto =>
      <option key={producto.id_producto} onChange={onChangeProducto} value={producto.id_producto}  data-id={producto.id_producto}>{producto.Nombre_Producto} </option>
      )}
     </select>
     
      <button type="button" onClick={handleClickRegresar} className='btn btn-dark'>regresar sin agregar</button>
      <button type="submit" className="btn btn-success" >agregar</button>
     </form>
     
      </div>
    </div>
    
     )

}