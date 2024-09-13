import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

const MainViewVentas = () => {


  const initialState = {
    id_empleado: '',
    id_cliente: '',
    id_producto: '',
    Fecha_Venta: '',
    Cantidad: '',
    Precio: ''
  }
  const { id } = useParams()
  const [venta, setVenta] = useState(initialState)

  const getVenta = async () => {
    try {
      let results = await axios.get("http://localhost:8000/ventas/view/"+id)
      setVenta(results.data[0])

    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    getVenta()
  }, [])


  return (


    <>
      
        <Card style={{ width: '18rem' }} className="card">
          <Card.Body>

            <Card.Text>Id Empleado: {venta.id_empleado}  </Card.Text>
            <Card.Text>Id Id_Cliente: {venta.id_cliente} </Card.Text>
            <Card.Text>Id Producto: {venta.id_producto}  </Card.Text>
            <Card.Text>Fecha de Venta: {venta.Fecha_Venta} </Card.Text>
            <Card.Text>Cantidad: {venta.Cantidad} </Card.Text>
            <Card.Text>Precio: {venta.Precio} </Card.Text>
            <Link className="btn btn-warning" to="/ventas">Volver</Link>
          </Card.Body>

        </Card>
      
    </>
  )
}

export default MainViewVentas