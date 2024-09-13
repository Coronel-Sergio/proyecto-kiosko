import { useState } from "react"
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { URL_CREATE_CLIENT } from "../../constants/constants"
import Header from "../Header"

const MainCreateClient = () => {
   // Hook de navegación para redirigir después de agregar un cliente
   const navigate = useNavigate();

   // Estado inicial del formulario para los datos del cliente
   const initialState = {
     Nombre_Cliente: "",
     Apellido_Cliente: "",
     Telefono: null,
     Direccion: "",
   };
 
   // Estado para almacenar los datos del formulario
   const [datosForm, setDatosForm] = useState(initialState);
 
   // Función para manejar el envío del formulario
   const handleSubmit = async (e) => {
     e.preventDefault();
 
     try {
       // Realizar una solicitud POST para agregar un cliente con los datos del formulario
       let response = await axios.post(URL_CREATE_CLIENT, {
         Nombre_Cliente: datosForm.Nombre_Cliente,
         Apellido_Cliente: datosForm.Apellido_Cliente,
         Telefono: datosForm.Telefono,
         Direccion: datosForm.Direccion,
       });
 
       // Verificar si la solicitud fue exitosa
       if (response) {
         // Mostrar un mensaje de éxito si se agregó el cliente correctamente
         alert("Cliente agregado correctamente");
         // Redirigir a la página de clientes después de agregar un cliente
         navigate("/clients");
       }
     } catch (error) {
       // Capturar y manejar errores si ocurre algún problema al agregar el cliente
       console.error("Error al agregar cliente:", error);
       alert("Hubo un problema al agregar el cliente.");
     }
   };
 
   // Función para manejar cambios en los campos del formulario
   const handleChange = (e) => {
     // Actualizar el estado de datosForm con el nuevo valor del campo cambiado
     setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
   };

  return (
    <>
      <Header></Header>
      <div className="text-center mt-5 mb-5">
        <h3>Agrega un nuevo cliente</h3>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-50">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Nombre</FormLabel>
              <FormControl type='text' onChange={handleChange} name='Nombre_Cliente' />
              <br />
              <FormLabel>Apellido</FormLabel>
              <FormControl type='text' onChange={handleChange} name='Apellido_Cliente' />
              <br />
              <FormLabel>Telefono</FormLabel>
              <FormControl type='text' onChange={handleChange} name='Telefono' />
              <br />
              <FormLabel>Direccion</FormLabel>
              <FormControl type='text' onChange={handleChange} name='Direccion' />
            </FormGroup>
            <br />
            <div className="d-flex justify-content-between">
              <Button type='submit' className="btn btn-success">Agregar</Button>
              <Link className="btn btn-primary" to={"/clients"}>Volver</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default MainCreateClient