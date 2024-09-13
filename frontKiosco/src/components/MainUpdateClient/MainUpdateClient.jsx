import { useState, useEffect } from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom"


const MainUpdateClient = () => {


    const navigate = useNavigate()
    const { id } = useParams()

    const initialState = {
        Nombre_Cliente: "",
        Apellido_Cliente: "",
        Telefono: "",
        Direccion: ""
    }

    const [cliente, SetCliente] = useState(initialState)







    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let results = await axios.put("http://localhost:8000/clients/edit/"+id, cliente)
            if (results) {
                alert("contacto actualizado correctamente")
                navigate("/clients")
            }
        } catch (error) {
            console.error(error)
        }
    }


    const getData = async () => {
        try {
            let response = await axios.get("http://localhost:8000/clients/view/"+id)
            console.log(response.data)
            if (response) {
                SetCliente(response.data[0])
            }
        } catch (error) {
            console.error(error)
        }
    }


    const handleChange = (e) => {
        SetCliente({ ...cliente, [e.target.name]: e.target.value })

    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <h3>Edita tu Cliente</h3>
            <br />
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl type='text' placeholder='Nombre' name="Nombre_Cliente" value={cliente.Nombre_Cliente} onChange={handleChange} />
                    <br />
                    <FormLabel>Apellido</FormLabel>
                    <FormControl type='text' placeholder='Apellido' name="Apellido_Cliente" value={cliente.Apellido_Cliente} onChange={handleChange} />
                    <br />
                    <FormLabel>Telefono</FormLabel>
                    <FormControl type='text' placeholder='Telefono' name="Telefono" value={cliente.Telefono} onChange={handleChange} />
                    <br />
                    <FormLabel>Direccion</FormLabel>
                    <FormControl type='text' placeholder='Direccion' name="Direccion" value={cliente.Direccion} onChange={handleChange} />
                    <br />

                </FormGroup>
                <br />
                <button type='submit' className="btn btn-success">Actualizar</button> <Link className="btn btn-warning" to="/clients">Volver</Link> 
                
                

            </Form>
        </>
    )
}

export default MainUpdateClient