import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"

import { Table, Col, Row, Container, Button } from "react-bootstrap"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { FaTrash, } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";


const MainVentas = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [selectedVenta, setSelectedVenta] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (venta) => {
    setSelectedVenta(venta);
    setShow(true);
  };


  const handleImprimir = (e) => {
    e.preventDefault()
    alert("Ticket Imprimido")
    handleClose();
    navigate("/ventas")
  }


  const [ventas, setVentas] = useState([])




  const getVentas = () => {
   axios.get("http://localhost:8000/ventas").then(resp =>{ setVentas(resp.data) ; console.log(resp.data)});
  }


  const handleChange = async (id) => {
    try {
      let response = await axios.delete(`http://localhost:8000/ventas/delete/${id}`)
      if (response) {
        alert("Cliente eliminado correctamente")
        getVentas()
      }
    } catch (error) {
      console.error(error)
      alert("error al eliminar el cliente")
    }

  }

  useEffect(() => {
    getVentas()
  }, [])


  return (
    <>

      <br />
      <br />
      <h2 className="text-center">Seccion de Ventas</h2>
      <br />
      <br />
      <h4 className="text-center">Listado de Ventas</h4>
      <br />

      <br />
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Empleado</th>
                  <th>Cliente</th>
                  <th>Producto</th>
                  <th>Fecha deVenta</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {ventas.map((venta) => (
                  <tr key={venta.id_venta}>
                    <td>{venta.id_venta}</td>
                    <td>{venta.Nombre_Empleado}</td>
                    <td>{venta.Nombre_Cliente}</td>
                    <td>{venta.Nombre_Producto}</td>
                    <td>{venta.Fecha_Venta}</td>
                    <td>{venta.Cantidad}</td>
                    <td>{venta.Precio}</td>
                    <td>{venta.Cantidad * venta.Precio}</td>
                    <td>
                      <Button variant="info" onClick={() => handleShow(venta)} className='me-2'>Ver Ticket</Button>
                      <Link to={`/ventas/edit/${venta.id_venta}`} className="btn btn-warning me-2"><BsFillPencilFill /></Link>
                      <Button variant="danger" onClick={() => handleChange(venta.id_venta)}><FaTrash /></Button>
                    </td>
                  </tr>
                ))}



              </tbody>
            </Table>
          </Col>
        </Row>

        {selectedVenta && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Detalle de la Venta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <p><strong>Nombre del empleado:</strong> {selectedVenta.Nombre_Empleado} {selectedVenta.Apellido_Empleado}</p>
              <p><strong>Nombre del cliente:</strong> {selectedVenta.Nombre_Cliente} {selectedVenta.Apellido_Clientes}</p>
              <p><strong>Nombre del producto:</strong> {selectedVenta.Nombre_Producto}</p>
              <p><strong>Fecha de Venta:</strong> {selectedVenta.Fecha_Venta}</p>
              <p><strong>Cantidad:</strong> {selectedVenta.Cantidad}</p>
              <p><strong>Precio:</strong> {selectedVenta.Precio}</p>
              <p><strong>Total:</strong> {selectedVenta.Cantidad * selectedVenta.Precio}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleImprimir}>
                Imprimir Ticket
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>

            </Modal.Footer>
          </Modal>
        )}




      </Container>

      <br />
      <div className="text-center">
        <Link to="/ventas/create" className='btn btn-success'>Agregar Venta</Link> <Link to="/home" className="btn btn-primary ms-2">Volver</Link>
      </div>
      <br />
      <br />


    </>
  )
}

export default MainVentas