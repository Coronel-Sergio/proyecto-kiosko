import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import "./view.css"

const MainViewClient = () => {

  const initialState = {
    Nombre_Cliente: "",
    Apellido_Cliente: "",
    Telefono: "", 
    Direccion: ""
  }
  const { id } = useParams()
  const [cliente, setCliente] = useState(initialState)

  const getCliente = async () => {
    try {
      let results = await axios.get("http://localhost:8000/clients/view/" + id)
      setCliente(results.data[0])

    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    getCliente()
  }, [])


  return (


    <>
      
        <Card style={{ width: '18rem' }} className="card-clients">
          <Card.Body>
            <Card.Title>{cliente.Nombre_Cliente} {cliente.Apellido_Cliente} </Card.Title>
            <br />
            <Card.Text>Telefono: {cliente.Telefono} </Card.Text>
            <Card.Text>Direccion: {cliente.Direccion} </Card.Text>
            <Link className="btn btn-warning" to="/clients">Volver</Link>
          </Card.Body>

        </Card>
      
    </>
  )
}

export default MainViewClient