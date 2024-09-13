import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Table, Col, Row, Container, Button , Modal, Card} from "react-bootstrap"
import { FaTrash, FaEye } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";


const MainClients = () => {
   // Estado para controlar la visibilidad del modal
   const [show, setShow] = useState(false);
   // Estado para almacenar el cliente seleccionado para mostrar en el modal
   const [selectedClient, setSelectedClient] = useState(null);
   // Estado para almacenar la lista de clientes
   const [clients, setClients] = useState([]);
 
   // Función para cerrar el modal
   const handleClose = () => setShow(false);
   
   // Función para abrir el modal y establecer el cliente seleccionado
   const handleShow = (client) => {
     setSelectedClient(client);
     setShow(true);
   };
 
   // Función asíncrona para obtener la lista de clientes desde el servidor
   const getClients = async () => {
       const response = await axios.get("http://localhost:8000/clients");
       // Actualizar el estado con los datos de clientes obtenidos
       setClients(response.data);
     } 
   
 
   // Función para manejar el evento de eliminar un cliente
   const handleChange = async (id) => {
     try {
       const response = await axios.delete(`http://localhost:8000/clients/delete/${id}`);
       if (response) {
         alert("Cliente eliminado correctamente");
         // Actualizar la lista de clientes después de eliminar uno
         getClients();
       }
     } catch (error) {
       console.error(error);
       alert("Error al eliminar el cliente");
     }
   };
 
   // Efecto que se ejecuta solo al montar el componente para obtener los clientes
   useEffect(() => {
     getClients();
   }, []);



  return (
    <>
<h2 className='text-center mt-5'>Seccion de clientes</h2>
     

      <h4 className='text-center mt-5'>Listado de Clientes</h4>


      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className='mb-3'>
              <div className='table-container' style={{ textAlign: 'center' }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>Telefono</th>
                      <th>Direccion</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.id_cliente}>
                        <td>{client.id_cliente}</td>
                        <td>{client.Nombre_Cliente}</td>
                        <td>{client.Apellido_Cliente}</td>
                        <td>{client.Telefono}</td>
                        <td>{client.Direccion}</td>
                        <td>
                          <Button variant='primary' onClick={() => handleShow(client)}>
                            <FaEye />
                          </Button>
                          <Link to={`/clients/edit/${client.id_cliente}`} className="btn btn-warning"><BsFillPencilFill /></Link>
                          <button className="btn btn-danger" onClick={() => handleChange(client.id_cliente)}><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <br />

              <div className="text-center">
                <Link to="/clients/create" className="btn btn-success">Agregar</Link>
                <Link to="/home" className="btn btn-primary ms-2">Volver</Link>

              </div>
              <br />
            </div>

          </Col>
        </Row>
      </Container>

      {selectedClient && (

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Información del Cliente</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center align-items-center">
            <Card style={{ width: '18rem' }} className="card">
              <Card.Body>
                <Card.Title>{selectedClient.Nombre_Cliente} {selectedClient.Apellido_Cliente}</Card.Title>
                <br />
                <Card.Text>Teléfono: {selectedClient.Telefono}</Card.Text>
                <Card.Text>Dirección: {selectedClient.Direccion}</Card.Text>
                <Button variant="warning" onClick={handleClose}>Volver</Button>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      )}




    </>
  )
}

export default MainClients