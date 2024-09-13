import { useState, useEffect } from "react";
import axios from "axios";


import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DELETE_CATEGORIA, GET_CATEGORIA } from "../../constants/constants";
import { Header } from "../../components/Header";


const Mostrar = () => {
// Estado para almacenar todas las categorías
const [allCategorias, setAllCategorias] = useState([]);

// Función asíncrona para obtener todas las categorías desde el servidor
const getCategorias = async () => {
  let response = await axios.get(GET_CATEGORIA);
  // Actualizar el estado con las categorías obtenidas del servidor
  setAllCategorias(response.data);
};

// Función para manejar el evento de eliminación de una categoría
const deleteCategory = async (id) => {
  console.log(id);
  // Realizar una solicitud DELETE para eliminar la categoría con el ID proporcionado
  const response = await axios.delete(`${DELETE_CATEGORIA}` + id);
  if (response) {
    // Alerta para indicar que la categoría fue eliminada correctamente
    alert("Categoría eliminada");
    // Actualizar la lista de categorías después de eliminar una
    getCategorias();
  }
};

// Efecto que se ejecuta solo al montar el componente para obtener las categorías
useEffect(() => {
  getCategorias();
}, []);

  return (
    <>
      <Header />
      <div className="mt-5 mb-5">
        <h3 className="text-center">Seccion Categoria</h3>
      </div>

      <div className="text-center mb-5 mt-5">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre de Categoría</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allCategorias.map((categoria, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{categoria.Nombre_Categoria}</td>
                <td>{categoria.Descripcion}</td>
                <td>
                  <Link to={`/categorias/editar/${categoria.id_categoria}`}>
                    <Button>Editar</Button>
                  </Link>
                  <Button onClick={() => deleteCategory(categoria.id_categoria)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>

      <div className="text-center mt-5 mb-5">
        <Link to="/categorias/agregar">
          <Button className="btn btn-success">Agregar Categoría</Button> <Link to={"/home"} className="btn btn-primary" >Volver</Link>
        </Link>
      </div>
      

     
   
    </>
  );
};

export default Mostrar;

