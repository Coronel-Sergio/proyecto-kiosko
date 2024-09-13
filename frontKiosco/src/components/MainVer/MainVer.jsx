import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


export const MainVer = () => {

  const {id} = useParams();
  const [datos,setDatos] = useState([]);
  const navegar = useNavigate();

  const obtenerDatos = () =>{
    axios.get("http://localhost:8000/pedidos/"+id)
    .then(resp =>{
    setDatos(resp.data[0])
    })
  }

   const handleClickRegresar = () =>{
    navegar("/pedidos");
   }

  useEffect(()=>{obtenerDatos()},[])

  return (

    <div className='contenedor-carta'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = {datos.imagen} />
      <Card.Body>
        <Card.Title>{datos.Nombre_Producto}</Card.Title>
        <Card.Text>
          Fecha del pedido : <i>{datos.Fecha_Pedido}</i>
        </Card.Text>
        <Card.Text>
          Fecha de la entrega : <i>{datos.Fecha_Entrega}</i>
        </Card.Text>
        <Card.Text>
          Proveedor : <i> {datos.Nombre_Proveedor} </i>
        </Card.Text>
        <Button variant="primary" onClick={handleClickRegresar}>Regresar</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
