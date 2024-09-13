import { useEffect, useState } from 'react'
import {Form, FormGroup, FormControl, FormLabel, Button, Container, Row,Col} from "react-bootstrap"
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'



const MainCreateVentas = () => {
  const navigate = useNavigate()

  const initialState = {
    id_empleado: '',
    id_cliente: '',
    id_producto: '',
    Fecha_Venta: '',
    Cantidad: '',
    Precio: ''
  }
  const [datosForm, setDatosForm] = useState(initialState)


  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);
  const [empleados, setEmpleados] = useState([]);

  const [fechaVenta,setFechaVenta] = useState();
  const [cantidad,setCantidad] = useState();
  const [precio,setPrecio] = useState();

  const [idCliente, setIdCliente] = useState();
  const [idProducto, setIdProducto] = useState();
  const [idEmpleado, setIdEmpleado] = useState();

  const obtenerDatosVenta = () => {
    axios.get("http://localhost:8000/ventas").then((resp) => {
      setClientes(resp.data);
      setEmpleados(resp.data);
      setProductos(resp.data);
    });
  };

  const handleChangeProducto = (e) => {
    const opcionElegida = e.target.options[e.target.selectedIndex];
    const dataID = opcionElegida.getAttribute("data-id");
    setIdProducto(dataID);
  };

  const handleChangeEmpleado = (e) => {
    const opcionElegida = e.target.options[e.target.selectedIndex];
    const dataID = opcionElegida.getAttribute("data-id");
    setIdEmpleado(dataID);
  };

  const handleChangeCliente = (e) => {
    const opcionElegida = e.target.options[e.target.selectedIndex];
    const dataID = opcionElegida.getAttribute("data-id");
    setIdCliente(dataID);
  };

  useEffect(() => {
    obtenerDatosVenta();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post("http://localhost:8000/ventas/create",{
        Fecha_Venta : fechaVenta,
        Cantidad : cantidad,
        Precio: precio,
        id_empleado : idEmpleado,
        id_cliente : idCliente,
        id_producto : idProducto,
      })

      if (response) {
        alert("Venta agregada correctamente !")
        navigate("/ventas")
      }
    } catch (error) {
      console.error("Error al agregar cliente:", error);
      alert("Hubo un problema al agregar la venta.");
    }


  }


  return (
    <>
    <div className='mb-5 mt-5 contenedor-general-crear-venta'>
    <h3 className='text-center'>Agregar nueva venta</h3>
    </div>
    

      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Seleccione el nombre del empleado</FormLabel>
                <select
                name=""
                id=""
                onChange={(e) => setIdEmpleado(e.target.value)}
              >
                {empleados.map((empleado) => 
                  <option
                    key={empleado.id_empleado}
                    value={empleado.id_empleado}
                    onChange={handleChangeEmpleado}
                    data-id={empleado.id_empleado}>
                    {empleado.Nombre_Empleado} {empleado.Apellido_Empleado}
                  </option>
                )}
              </select>

                <br />
                <FormLabel>Seleccione el nombre del cliente</FormLabel>
               <select
                name=""
                id=""
                onChange={(e) => setIdCliente(e.target.value)}
              >
                {clientes.map((cliente) => 
                  <option
                    key={cliente.id_cliente}
                    value={cliente.id_cliente}
                    onChange={handleChangeCliente}
                    data-id={cliente.id_cliente}>
                    {cliente.Nombre_Cliente} {cliente.Apellido_Cliente}
                  </option>
                )}
              </select>
                <br />

                <FormLabel>Seleccione el nombre del pruducto</FormLabel>
                
                <select
                name=""
                id=""
                onChange={(e) => setIdProducto(e.target.value)}
              >
                {productos.map((producto) => (
                  <option
                    key={producto.id_producto}
                    value={producto.id_producto}
                    onChange={handleChangeProducto}
                    data-id={producto.id_producto}
                  >
                    {producto.Nombre_Producto}
                  </option>
                ))}
              </select>
              <br />
              <FormLabel>Ingrese la fecha de venta</FormLabel>
              <FormControl
                type="date"
        
                name="Cantidad"
                onChange={(e)=>setFechaVenta(e.target.value)}
                required
              />
    
                <br />
                <FormLabel>Cantidad</FormLabel>
                <FormControl type='number'  placeholder="Ingrese la cantidad" name='Cantidad' onChange={(e)=>setCantidad(e.target.value)}  />
                <br />
                <FormLabel>Precio</FormLabel>
                <FormControl type='number'  placeholder="Ingrese el precio" name='Precio' onChange={(e)=>setPrecio(e.target.value)} />
                <br />
              </FormGroup>
              <Button type='submit' className="btn btn-success">Agregar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
      <div className='text-center mb-5 mt-5'>
        <Link className="btn btn-primary" to={"/ventas"}>Volver</Link>
      </div>
    </>
  )
}

export default MainCreateVentas