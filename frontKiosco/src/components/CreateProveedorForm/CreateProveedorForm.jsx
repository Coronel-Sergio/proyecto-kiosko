/* eslint-disable react/prop-types */
import axios from 'axios'
import { useState } from 'react'

const CreateProveedorForm = ({ getProveedores }) => {
  const [datosForm, setDatosForm] = useState()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios.post("http://localhost:8000/proveedores/create", {...datosForm})
    if (resp) {
      alert("El proveedor se creo correctamente!")
      getProveedores()
    }
  }
  const handleChange = (e) => {
    setDatosForm({...datosForm, [e.target.name]: e.target.value })
  }
  return (
    <form className="w-25 form-style" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nombre Proveedor:</label>
        <input type="text" className="form-control" name="Nombre_Proveedor"  onChange={handleChange} required />        
      </div>
      <div className="mb-3">
        <label className="form-label">Correo Proveedor:</label>
        <input type="text" className="form-control" name="Correo_Proveedor"  onChange={handleChange} required/>        
      </div>
      <div className="mb-3">
        <label className="form-label">Telefono:</label>
        <input type="number" className="form-control" name="Telefono" onChange={handleChange} required/>        
      </div>  
      <button type='submit' className='btn btn-success'>Crear Proveedor</button>      
    </form>
  )
}

export default CreateProveedorForm