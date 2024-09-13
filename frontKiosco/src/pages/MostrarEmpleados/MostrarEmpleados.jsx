import { useState,useEffect } from "react"
import axios from "axios"
import {Container, Table} from "react-bootstrap"
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { URL_EMPLEADOS, URL_EMPLEADOS_ELIMINAR } from "../../constants/constants";
import { Header } from "../../components/Header";


const MostrarEmpleados = () => {
     // Estado para almacenar los datos de empleados
  const [datos, setDatos] = useState([]);

  // Función asíncrona para obtener los datos de empleados desde el servidor
  const getDatos = async () => {
    let response = await axios.get(URL_EMPLEADOS);
    // Actualizar el estado con los datos de empleados obtenidos
    setDatos(response.data);
  };

  // Función para manejar el evento de eliminar un empleado
  const handleChange = async (id_empleado) => {
    // Realizar una solicitud DELETE para eliminar el empleado
    const response = await axios.delete(URL_EMPLEADOS_ELIMINAR + id_empleado);
    console.log(response);
    
    // Alerta para confirmar la eliminación exitosa del empleado
    alert("Empleado eliminado correctamente");
    // Actualizar la lista de empleados después de eliminar uno
    getDatos();
  };

  // Efecto que se ejecuta solo al montar el componente para obtener los datos de empleados
  useEffect(() => {
    getDatos();
  }, []);

  return (
    <div> 
      <Header/>
  
      <div className="mt-5 mb-5">
        <h3 className="text-center">Seccion Empleados</h3>
      </div>

    <h4 className="text-center">Lista de Empleados</h4>
     <br />
     <Container>
      
      <br />
      <br />
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Direccion</th>
          <th>acciones</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato)=><tr key={dato.id_empleado}>
          <td>{dato.id_empleado}</td>
          <td>{dato.Nombre_Empleado}</td>
          <td>{dato.Apellido_Empleado}</td>
          <td>{dato.Telefono}</td>
          <td>{dato.Correo}</td>
          <td>{dato.Direccion}</td>
          <td>
           <button type="submit" className="btn btn-danger" onClick={()=>handleChange(dato.id_empleado)}><FaTrash/></button>
           <Link to={`/Empleados/editar/${dato.id_empleado}`} className="btn btn-warning"><FaEdit/></Link>
          </td>
        </tr>)}
      </tbody>
    </Table>

     </Container>
     <div className="text-center mt-5">
     <Link to="/Empleados/crear"  className="btn btn-success ms-3 me-3">Agregar</Link>
     <Link to={"/home"} className="btn btn-primary ">Volver</Link>
     </div>
     
     

    </div>
  )
}

export default MostrarEmpleados