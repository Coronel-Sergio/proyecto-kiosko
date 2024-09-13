import { useState,useEffect } from "react"
import {Form,FormControl,FormGroup, Container} from "react-bootstrap"
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom"
import { URL_EMPLEADOS } from "../../constants/constants"


const MainEditar = () => {


  const {id} = useParams()


  const navigate = useNavigate()
   

  const initialState = {
    Nombre_Empleado:"",
    Apellido_Empleado:"",
    Telefono:"",
    Correo:"",
    Direccion:""
  }
   

  const [empleado, setEmpleado] = useState(initialState)


  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      let response = await axios.put("http://localhost:8000/Empleados/editar/"+id,empleado)
      if (response.status === 200) {
        alert("Empleado Actualizaso correctamente")
        navigate("/Empleados")
      }
    } catch (error) {
      console.error(error);
    }
  }





   const getData = async() => {
     
    let response = await axios.get(URL_EMPLEADOS+id)
    console.log(response.data);
    if (response.status === 200) {
     setEmpleado(response.data[0])
    }
    

   }


   const handleChange = (e) => {
     setEmpleado({...empleado,[e.target.name]:e.target.value})
   }

  
   useEffect(() => {
    getData()
   },[])

  return (
    <div>
      <br />
      <br />
      <h3 className="text-center">Actualizar un Empleado</h3>
      <br />
      <br />
      <Container className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit} style={{ width: '400px' }}>
        <FormGroup>
          <FormControl placeholder="Nombre" type="text" value={empleado.Nombre_Empleado} onChange={handleChange} name="Nombre_Empleado"/>
          <br />
          <FormControl placeholder="Apellido" type="text" value={empleado.Apellido_Empleado} onChange={handleChange} name="Apellido_Empleado"/>
          <br />
          <FormControl placeholder="Telefono" type="number" value={empleado.Telefono} onChange={handleChange} name="Telefono"/>
          <br />
          <FormControl placeholder="Correo" type="email" value={empleado.Correo} onChange={handleChange} name="Correo"/>
          <br />
          <FormControl placeholder="Direccion" type="text" value={empleado.Direccion} onChange={handleChange} name="Direccion"/>
          <br />
          <button type="submit" className="btn btn-primary">Actualizar</button>
          <Link to={"/Empleados"} className="btn btn-dark ms-3" >Volver</Link>
        </FormGroup>
      </Form>
      </Container>
      <br />
      <br />
    </div>
  )
}

export default MainEditar