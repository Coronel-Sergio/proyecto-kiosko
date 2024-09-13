import { useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../Header";

const MainUpdateVentas = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  
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

  
  const obtenerDatosSimples = () =>{
    
    axios.get("http://localhost:8000/ventas/view/" + id).then(
      resp=>{
        setFechaVenta(resp.data[0].Fecha_Venta);
        setCantidad(resp.data[0].Cantidad);
        setPrecio(resp.data[0].Precio)
      })
  }

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

  useEffect(() => {
    obtenerDatosSimples();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let results = await axios.put("http://localhost:8000/ventas/edit/"+id,{
         id_empleado : idEmpleado,
         id_cliente :  idCliente,
         id_producto:  idProducto,
         Fecha_Venta:  fechaVenta,
         Cantidad: cantidad,
         Precio: precio
      
      });

      if (results) {
        alert("contacto actualizado correctamente")
        navigate("/ventas")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Header/>
      <div className="text-center mt-5 mb-5">
      <h3>Edita la Venta</h3>
      </div>
    
      <div className="d-flex justify-content-center mt-5">
      <div className="w-50">
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
        
                name="fechaventa"
                onChange={(e)=>setFechaVenta(e.target.value)
                }
                value={fechaVenta}
                required
              />
    
                <br />
                <FormLabel>Cantidad</FormLabel>
                <FormControl type='number'  placeholder="Ingrese la cantidad" name='Cantidad' onChange={(e)=>setCantidad(e.target.value)} value={cantidad} />
                <br />
                <FormLabel>Precio</FormLabel>
                <FormControl type='number'  placeholder="Ingrese el precio" name='Precio' onChange={(e)=>setPrecio(e.target.value)} value={precio}/>
                <br />
              </FormGroup>
              <Button type='submit' className="btn btn-success">Agregar</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
    </div>

      
    </>
  );
};

export default MainUpdateVentas;
