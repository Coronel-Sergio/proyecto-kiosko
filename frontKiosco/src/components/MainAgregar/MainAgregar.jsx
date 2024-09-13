import {Form,FormControl,FormGroup,Button, Container} from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { URL_EMPLEADOS_AGREGAR } from "../../constants/constants"

const MainAgregar = () => {
   // Hook de navegación para redirigir después de agregar un empleado
  const navigate = useNavigate();

  // Estado inicial del formulario para los datos del empleado
  const initialState = {
    Nombre_Empleado: "",
    Apellido_Empleado: "",
    Telefono: null,
    Correo: "",
    Direccion: "",
  };

  // Estado para almacenar los datos del formulario
  const [datosForm, setDatosForm] = useState(initialState);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar una solicitud POST para agregar un empleado con los datos del formulario
      let response = await axios.post(URL_EMPLEADOS_AGREGAR, {
        Nombre_Empleado: datosForm.Nombre_Empleado,
        Apellido_Empleado: datosForm.Apellido_Empleado,
        Telefono: datosForm.Telefono,
        Correo: datosForm.Correo,
        Direccion: datosForm.Direccion,
      });

      // Verificar si la solicitud fue exitosa
      if (response) {
        // Mostrar un mensaje de éxito si se agregó el empleado correctamente
        alert("Empleado agregado correctamente");
        // Redirigir a la página de empleados después de agregar un empleado
        navigate("/Empleados");
      }
    } catch (error) {
      // Capturar y manejar errores si ocurre algún problema al agregar el empleado
      console.error("Error al agregar empleado:", error);
      alert("Hubo un problema al agregar el empleado.");
    }
  };

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    // Actualizar el estado de datosForm con el nuevo valor del campo cambiado
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  // Función para manejar el clic en el botón de cancelar o volver
  const handleClick = (e) => {
    e.preventDefault();
    // Navegar de vuelta a la página de empleados
    navigate("/Empleados");
  };



  return (
    <div>
      <br />
      <br />
      <br />
      <h3 className="text-center">Agrega un Empleado</h3>
      <br />
      <br />
      <Container className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} style={{ width: '400px' }}>
        <FormGroup>
          <FormControl placeholder="Nombre" type="text" onChange={handleChange} name="Nombre_Empleado"/>
          <br />
          <FormControl placeholder="Apellido" type="text" onChange={handleChange} name="Apellido_Empleado"/>
          <br />
          <FormControl placeholder="Telefono" type="number" onChange={handleChange} name="Telefono"/>
          <br />
          <FormControl placeholder="Correo" type="email" onChange={handleChange} name="Correo"/>
          <br />
          <FormControl placeholder="Direccion" type="text" onChange={handleChange} name="Direccion"/>
          <br />
          <Button type="submit" className="btn btn-success ">Agregar</Button>
          <Button onClick={handleClick}>Cancelar</Button>
        </FormGroup>
      </Form>
      </Container>
    </div>
  )
}

export default MainAgregar