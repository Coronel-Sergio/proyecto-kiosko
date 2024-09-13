import { useState } from "react";
import axios from "axios";
import Header from "../Header";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AGREGAR_CATEGORIA } from "../../constants/constants";
import { Link } from "react-router-dom";


const Mainagregar2 = () => {
  const [Nombre_Categoria, setNombre_Categoria] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();





  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(AGREGAR_CATEGORIA, { Nombre_Categoria, Descripcion });
      navigate("/categorias");
    } catch (error) {
      console.error("Error al agregar la categoría:", error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="mt-5 mb-5">
        <h2 className="text-center">Agregar Categoría</h2>
      </div>


      <div className="d-flex justify-content-center my-5">
        <div className="w-50">
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Nombre de Categoría</Form.Label>
              <Form.Control
                type="text"
                value={Nombre_Categoria}
                onChange={(e) => setNombre_Categoria(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={Descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-between mt-3">
              <Button type="submit" className="btn btn-success">Agregar</Button>
              <Link to={"/categorias"} className="btn btn-primary">Volver</Link>

            </div>
          </Form>
        </div>
      </div>
     
    </>
  );
};

export default Mainagregar2;


