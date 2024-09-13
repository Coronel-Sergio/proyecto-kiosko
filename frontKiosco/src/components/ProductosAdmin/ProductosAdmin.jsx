/* eslint-disable react/prop-types */

import axios from "axios";

const ProductosAdmin = ({ id_producto, Nombre_Producto, Nombre_Categoria ,Precio, Stock, setEdit, editState, Descripcion, id_categoria, imagen, getProductos }) => {
  const handleClick = () => {
    setEdit(true)
    editState.id = id_producto;
    editState.nombreProducto = Nombre_Producto;
    editState.descripcion = Descripcion;
    editState.precio = Precio;
    editState.imagen = imagen;
    editState.stock = Stock;
    editState.categoria = id_categoria
    editState.nombreCategoria = Nombre_Categoria;
  }
  
  const handleDeleteProduct = async () => {
    const deleteProduct = await axios.delete(`http://localhost:8000/products/delete/${id_producto}`)
    console.log(deleteProduct)
    if (deleteProduct.status === 200) {
      alert("Producto eliminado correctamente!")
      getProductos()

    }
  }

  return (
    <tbody >
      <tr >
        <th scope="row">{id_producto}</th>
        <td>{Nombre_Producto}</td>
        <td>{Precio}</td>
        <td>{Stock}</td>
        <td><div className="d-flex gap-2"><button className="btn btn-outline-success" onClick={handleClick}>Edit</button><button onClick={handleDeleteProduct} className="btn btn-outline-danger">X</button></div></td>

      </tr>

    </tbody>
    
    
  )
}

export default ProductosAdmin