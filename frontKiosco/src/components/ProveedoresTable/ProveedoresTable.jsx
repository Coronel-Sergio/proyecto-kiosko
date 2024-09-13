/* eslint-disable react/prop-types */
import axios from "axios"
import { useState } from "react"

const ProveedoresTable = ({ id_proveedor, Nombre_Proveedor, Correo_Proveedor, Telefono, getProveedores}) => {
  const [nombreProveedor, setNombreProveedor] = useState("")
  const [correoProveedor, setCorreoProveedor] = useState("")
  const [telefonoProveedor, setTelefonoProveedor] = useState("")
  const [edit, setEdit] = useState(false)

  const confirmEdit = () => {
    setEdit(!edit)
    setNombreProveedor(Nombre_Proveedor)
    setCorreoProveedor(Correo_Proveedor)
    setTelefonoProveedor(Telefono)
  }

  const handleEdit =  async () => {
    const resp = await axios.put("http://localhost:8000/proveedores/editar/"+id_proveedor,{
      Nombre_Proveedor: nombreProveedor,
      Correo_Proveedor: correoProveedor,
      Telefono: telefonoProveedor
    })
    if (resp) {
      getProveedores()
    }
  }

  const handleDelete = async () => {
    const respDelete = await axios.delete("http://localhost:8000/proveedores/eliminar/"+id_proveedor)
    if (respDelete) {
      alert("Proveedor eliminado correctamente!")
    }
    getProveedores()


  }

  return (
    <tbody>
      <tr>
        <th scope="row">{id_proveedor}</th>
        {edit ? <td><input type="text" className="form-control" name="descripcion" value={nombreProveedor} onChange={({ target }) => setNombreProveedor(target.value)} required /> </td> : <td>{Nombre_Proveedor}</td>}        
        {edit ? <td><input type="text" className="form-control" name="descripcion" value={correoProveedor} onChange={({ target }) => setCorreoProveedor(target.value)} required /> </td> : <td>{Correo_Proveedor}</td>}
        {edit ? <td><input type="number" className="form-control" name="descripcion" value={telefonoProveedor} onChange={({ target }) => setTelefonoProveedor(target.value)} required /> </td> : <td>{Telefono}</td>}
        <td><div className="d-flex gap-2"><button className="btn btn-outline-success" onClick={confirmEdit} >✍</button><button onClick={handleDelete} className="btn btn-outline-danger">🗑</button>{edit === true && <button onClick={handleEdit} className="btn btn-primary">Guardar cambios</button>}</div>
        </td>
        

      </tr>
    </tbody>
  )
}

export default ProveedoresTable