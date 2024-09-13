import { useState, useEffect } from "react";
import axios from "axios";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { EDITAR_CATEGORIA, GET_CATEGORIA } from "../../constants/constants";

const Editar = () => {
  
  const { id } = useParams();
  const [Nombre_Categoria, setNombre_Categoria] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let response = await axios.get(`${GET_CATEGORIA}${id}`);
        setNombre_Categoria(response.data.Nombre_Categoria);
        setDescripcion(response.data.Descripcion);
      } catch (error) {
        console.error("Error al obtener la categoría:", error);
      }
    };
    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(EDITAR_CATEGORIA + id, { Nombre_Categoria, Descripcion });
    } catch (error) {
      console.error("Error al editar la categoría:", error);
    }
  };

  return (
    <div>
      <h2>Editar Categoría</h2>
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
        <Button type="submit">Guardar Cambios</Button>
      </Form>
    </div>
  );
};

export default Editar;
