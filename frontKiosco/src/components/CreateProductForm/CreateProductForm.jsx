/* eslint-disable react/prop-types */
import axios from "axios"
import './createproductform.css'
import { useEffect, useState } from "react"
import { GET_CATEGORIA } from "../../constants/constants"

const CreateProductForm = ({ edit, editState, setEditState, setEdit, getProductos }) => {
  const [datosForm, setDatosForm] = useState({})
  const [categoriaFetch, setCategoriaFetch] = useState([]);

   const getCategorias = async ()  => {
   const respCategorias = await axios.get(GET_CATEGORIA)
    const categoriasFilter = respCategorias.data.filter(categoria => categoria.Nombre_Categoria !== editState.nombreCategoria)
    setCategoriaFetch(categoriasFilter);   
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const resp = await axios.post("http://localhost:8000/products/create", datosForm)
    if (resp.status === 200) {
      alert("Producto creado exitosamente")
      getProductos()
    }
  }

  const handleChange = (e) => {
    setDatosForm({...datosForm, [e.target.name]: e.target.value })
    setEditState({...editState, [e.target.name]: e.target.value })
  }
  const handleEdit = async (e) => {
    e.preventDefault()
    const respEdit = await axios.put(`http://localhost:8000/products/edit`, editState)
    if(respEdit.status === 200) {
      alert("Producto editado exitosamente!")
      getProductos()

    }
  }

  const handleCancelEdit = () => {
    setEdit(false);
    editState.id = null;
    editState.nombreProducto = "";
    editState.descripcion = "";
    editState.precio = "";
    editState.stock = "";
    editState.imagen = "";
    editState.nombreCategoria = "";
  }

  useEffect(() => {
    getCategorias(); 
  }, [editState.nombreCategoria])

  return (
    <form className="w-25 form-style" onSubmit={edit === false && handleSubmit}>
      {edit === true ? <h4 className="text-center">Editar Producto</h4> : <h4 className="text-center">Crear Producto</h4> }
      <div className="mb-3">
        <label className="form-label">Nombre Producto:</label>
        <input type="text" className="form-control" name="nombreProducto" value={editState?.nombreProducto} onChange={handleChange} required />        
      </div>
      <div className="mb-3">
        <label className="form-label">Descripcion:</label>
        <input type="text" className="form-control" name="descripcion" value={editState?.descripcion} onChange={handleChange} required/>        
      </div>
      <div className="mb-3">
        <label className="form-label">Precio:</label>
        <input type="number" className="form-control" name="precio" value={editState?.precio} onChange={handleChange} required/>        
      </div>
      <div className="mb-3">
        <label className="form-label">Stock:</label>
        <input type="number" className="form-control" name="stock" value={editState?.stock} onChange={handleChange} required/>        
      </div>
      <div className="mb-3">
        <label className="form-label">Imagen:</label>
        <input type="text" className="form-control" name="imagen" value={editState?.imagen} onChange={handleChange} required/>        
      </div>
      <div className="mb-3">
      <label className="form-label"> Categoria: </label>
      <select className="form-select form-select-sm" aria-label="Small select example" name="categoria" onChange={handleChange} required>
        {editState?.categoria !== null && <option value={editState?.id_categoria}>{editState?.id_categoria}</option>}
        <option selected value={editState.id_categoria}>{editState.nombreCategoria}</option>
        {categoriaFetch.map(cat => <option key={cat.id_categoria} value={cat.id_categoria}>{cat.Nombre_Categoria}</option>)}
      </select>     
      </div>
      {edit ? <> <button type="submit" onClick={handleEdit} className="btn btn-success">Actualizar</button> <button type="submit" onClick={handleCancelEdit} className="btn btn-danger">X</button></> : <button type="submit" className="btn btn-outline-primary">Agregar producto</button> }      
    </form>
  )
}

export default CreateProductForm