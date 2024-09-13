import axios from "axios"
import { useEffect, useState } from "react"
import ProveedoresTable from "../../components/ProveedoresTable/ProveedoresTable"
import CreateProveedorForm from "../../components/CreateProveedorForm/CreateProveedorForm"
import { Header } from "../../components/Header"
import { Link } from "react-router-dom"

const Proveedores = () => {
  // Estado para almacenar los datos de proveedores
  const [proveedoresData, setProveedoresData] = useState();

  // Función asíncrona para obtener los proveedores desde el servidor
  const getProveedores = async () => {
      const proveedores = await axios("http://localhost:8000/proveedores");
      // Actualizar el estado con los datos de proveedores obtenidos
      setProveedoresData(proveedores.data);
    } 
  
  // Efecto que se ejecuta solo al montar el componente para obtener los proveedores
  useEffect(() => {
    getProveedores();
  }, []);

   // Mostrar en la consola el estado actual de proveedoresData
   console.log(proveedoresData);

  return (
    <>
      <Header />
      <h3 className="text-center mt-5 mb-5">Seccion Proveedores</h3>
      <div className="text-center mt-5 mb-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre Proovedor</th>
            <th scope="col">Correo Proveedor</th>
            <th scope="col">Telefono</th>
          </tr>
        </thead>
        {
          proveedoresData?.map(proveedor => <ProveedoresTable key={proveedor.id_proveedor} {...proveedor} getProveedores={getProveedores} />)
        }
      </table>
      </div>
      
      <div className="d-flex justify-content-center">
        <CreateProveedorForm getProveedores={getProveedores} />
      </div>


      <div className="text-center mt-5 mb-5">
        <Link to={"/home"} className="btn btn-primary">Volver</Link>
      </div>


      
    </>
  )
}

export default Proveedores