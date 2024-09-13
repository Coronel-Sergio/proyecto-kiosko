/* eslint-disable no-irregular-whitespace */
import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiMiniPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { Header } from '../Header';


export const MainHome = () => {
   // Estados para almacenar los pedidos y sus detalles
   const [pedidos, setPedidos] = useState([]);
   const [fechaPedido, setFechaPedido] = useState("");
   const [fechaEntrega, setFechaEntrega] = useState("");
   const [estado_Pedido, setEstadoPedido] = useState("");
   const [idGlobal, setIGlobal] = useState("");
   const [proveedores, setProveedores] = useState([]);
   const [productos, setProductos] = useState([]);
   const [idProduc, setIdProduc] = useState();
   const [idProve, setIdProve] = useState();
 
   // Hook de navegación para redirigir a otras páginas
   const navegador = useNavigate();
 
   // Función para obtener todos los pedidos desde el servidor
   const getPedidos = async () => {
     let resp = await axios.get("http://localhost:8000/pedidos");
     if (resp) {
       setPedidos(resp.data);
       console.log(resp.data);
     }
   };
 
   // Función para eliminar un pedido dado su ID
   const eliminarPedido = (id) => {
     let respuesta = window.confirm("¿Estás seguro que deseas eliminar el pedido de forma permanente?");
     if (respuesta) {
       axios.delete("http://localhost:8000/pedidos/delete/" + id)
         .then(() => {
           alert("Pedido eliminado");
           getPedidos();
         });
     }
   };
 
   // Función para manejar la edición de un pedido
   const handleClickEditar = (id) => {
     setIGlobal(id);
     if (id) {
       axios.get("http://localhost:8000/pedidos/" + idGlobal)
         .then(resp => {
           setFechaPedido(resp.data[0].Fecha_Pedido);
           setFechaEntrega(resp.data[0].Fecha_Entrega);
           setEstadoPedido(resp.data[0].Estado_Pedido);
           setIdProve(resp.data[0].id_proveedor);
           setIdProduc(resp.data[0].id_producto);
         });
     }
   };
 
   // Función para manejar el envío del formulario de edición de pedido
   const handleSubmit = (e) => {
     e.preventDefault();
     if (idProve !== undefined && idProduc !== undefined) {
       axios.put("http://localhost:8000/pedidos/edit/" + idGlobal, {
         Fecha_Entrega: fechaEntrega,
         Fecha_Pedido: fechaPedido,
         Estado_Pedido: estado_Pedido,
         id_proveedor: idProve,
         id_producto: idProduc
       })
       .then(() => {
         alert("Pedido actualizado");
         getPedidos();
         limpiarCampos();
       });
     } else {
       alert("Debes elegir un proveedor y producto");
     }
   };
 
   // Función para obtener los datos de proveedores y productos
   const obtenerDatosProveedorYProductos = () => {
     axios.get("http://localhost:8000/pedidos")
       .then(resp => {
         console.log(resp);
         setProductos(resp.data);
         setProveedores(resp.data);
       });
   };
 
   // Función para navegar a la página de agregar nuevo pedido
   const handleClickNuevoPedido = () => {
     navegador("/pedidos/agregar");
   };
 
   // Función para navegar a la página de visualizar detalles del pedido
   const handleVisualizar = (id) => {
     navegador("/pedidos/ver/" + id);
   };
 
   // Función para limpiar los campos del formulario de pedido
   const limpiarCampos = () => {
     setEstadoPedido("");
     setFechaEntrega("");
     setFechaPedido("");
   };
 
   // Efecto para obtener los datos de proveedores y productos al montar el componente
   useEffect(() => {
     obtenerDatosProveedorYProductos();
   }, []);
 
   // Efecto para obtener todos los pedidos al montar el componente
   useEffect(() => {
     getPedidos();
   }, []);

  return (
    
    <div className='contenedor-general '>
      <Header />
      <div className='text-center mt-5 mb-5'>
      <h3>Seccion Pedidos</h3>
      </div>
      
      <div className='contenedor-btn-nuevo-pedido mt-5 mb-5 ms-3'>
        <button onClick={handleClickNuevoPedido} className="btn btn-success">Agregar nuevo pedido</button>
      </div>
      <div className='contenedor-general-txt-tabla'>
        <div className='contenedor-datos'>
          <article>
            <form onSubmit={handleSubmit}>
              <label className='fw-bold' htmlFor="">Fecha del pedido: </label>
              <input type="date" name="Estado_Pedido" id="" onChange={(e) => setFechaPedido(e.target.value)} value={fechaPedido} required />
              <label className='fw-bold' htmlFor="">Fecha de la entrega: </label>
              <input type="date" name="Fecha_Entrega" id="" onChange={(e) => setFechaEntrega(e.target.value)} value={fechaEntrega} required />
              <label className='fw-bold' htmlFor="">Estado del pedido: </label>
              <input type="text" name="Estado_Pedido" id="" placeholder='Ingrese estado del pedido' onChange={(e) => setEstadoPedido(e.target.value)} value={estado_Pedido} required />
              <label className='fw-bold' htmlFor="">Nombre del proveedor: </label>
              <select name="" id="" onChange={(e) => setIdProve(e.target.value)} required>
                {proveedores.map(proveedor =>
                  <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>{proveedor.Nombre_Proveedor} </option>
                )}
              </select>
              <label className='fw-bold' htmlFor="">Nombre del producto</label>
              <select name="" id="" onChange={(e) => setIdProduc(e.target.value)}>
                {productos.map(producto =>
                  <option key={producto.id_producto} value={producto.id_producto}>{producto.Nombre_Producto} </option>
                )}
              </select>
              <button type='submit' className="btn btn-secondary">Actualizar</button>
              <div className='mt-3'>
                <Link to={"/home"} className='btn btn-primary'>Volver</Link>
              </div>
            </form>
          </article>
        </div>


     
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>codigo del pedido</th>
              <th>Fecha pedido</th>
              <th>Fecha entrega</th>
              <th>Estado pedido</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Proveedor</th>
              <th>Telefono del proveedor</th>
              <th>Correo del proveedor</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              pedidos.map(pedido =>
                <tr key={pedido.id_pedido}>
                  <td>{pedido.id_pedido}</td>
                  <td>{pedido.Fecha_Pedido}</td>
                  <td>{pedido.Fecha_Entrega}</td>
                  <td>{pedido.Estado_Pedido}</td>
                  <td>{pedido.Nombre_Producto}</td>
                  <td>{pedido.Precio}</td>
                  <td>{pedido.Nombre_Proveedor}</td>
                  <td>{pedido.Telefono}</td>
                  <td>{pedido.Correo_Proveedor}</td>
                  <td>
                    <button onClick={() => handleClickEditar(pedido.id_pedido)} className="btn btn-warning"><HiMiniPencil /></button>
                    <button onClick={() => eliminarPedido(pedido.id_pedido)} className="btn btn-danger"><MdDelete /></button>
                    <button onClick={() => handleVisualizar(pedido.id_pedido)} className="btn btn-primary"><MdRemoveRedEye /></button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>


      </div>

      
    </div>
    
  )
}