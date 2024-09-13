import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import Swal from "sweetalert2";

const Login = () => {
   // Hook de navegación para redirigir después del inicio de sesión
   const navigate = useNavigate();
  
   // Estados para almacenar el nombre de usuario y la contraseña
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
 
   // Función para manejar el envío del formulario de inicio de sesión
   const handleChange = async (e) => {
     e.preventDefault();
     
     // Realizar una solicitud POST para iniciar sesión con las credenciales proporcionadas
     const login = await axios.post("http://localhost:8000/login", {
       username,
       password
     }).catch(function(error) {
       // Manejar errores de la solicitud, como credenciales incorrectas
       alert(error.response.data.message);
     });
 
     // Verificar el estado de la respuesta del servidor
     if (login.status === 200) {
       // Mostrar un mensaje de éxito utilizando SweetAlert
       Swal.fire({
         icon: "success",
         title: login.data.message,
         showConfirmButton: false,
         timer: 1500
       });
       
       // Redirigir a la página de inicio después de 1.5 segundos
       setTimeout(() => {
         navigate("/home");
       }, 1500);
     } else {
       // Mostrar un mensaje de error si falla el inicio de sesión
       alert(login.data.message);
     }
   };
   
  return (
    <div className="form-login d-flex justify-content-center align-items-center">
      <div className="w-25 container-login">
        <h5 className="text-center">Login</h5>
        <form onSubmit={handleChange}>
          <div className="mb-3">
            <input type="text" placeholder="Ingrese usuario..." className="form-control"  value={username} onChange={({target}) => setUsername(target.value)}  required />
          </div>
          <div className="mb-3">
            <input type="password" placeholder="Ingrese password..." className="form-control" id="exampleInputPassword1" value={password} onChange={({target}) => setPassword(target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
      </div>
    </div>
  )
}

export default Login