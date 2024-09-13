import axios from "axios"
import { useEffect, useState } from "react"
import ProductosAdmin from "../../components/ProductosAdmin/ProductosAdmin";
import CreateProductForm from "../../components/CreateProductForm/CreateProductForm";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

const ProductsAdmin = () => {
  // Estado para almacenar los datos de los productos
  const [productsData, setProductsData] = useState([]);
  // Estado para controlar si se está editando un producto
  const [edit, setEdit] = useState(false);
  // Estado para almacenar los datos del producto en edición
  const [editState, setEditState] = useState({});

  // Función asíncrona para obtener los productos desde el servidor
  const getProductos = async () => {
    try {
      const products = await axios("http://localhost:8000/products");
      // Almacenar los datos de los productos en el estado
      setProductsData(products.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Efecto que se ejecuta solo al montar el componente para obtener los productos
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5 mb-5">
        <CreateProductForm edit={edit} setEdit={setEdit} editState={editState} setEditState={setEditState} getProductos={getProductos} />
      </div>
      <div className="text-center">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {
            productsData.map(product => <ProductosAdmin key={product.id_producto} {...product} setEdit={setEdit} setEditState={setEditState} editState={editState} getProductos={getProductos} />)
          }
        </table>
      </div>
      <div className="text-center mb-5 mt-5">
        <Link to={"/Productos"} className="btn btn-primary">Volver</Link>
      </div>
      
      

    </>
  )
}

export default ProductsAdmin