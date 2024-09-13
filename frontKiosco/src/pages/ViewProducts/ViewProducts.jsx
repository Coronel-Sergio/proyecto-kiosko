import axios from "axios";
import { useEffect, useState } from "react"
import CardProducts from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";


const ViewProducts = () => {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState();

  // Función para obtener los productos desde el servidor
  const getProducts = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/products");
      // Actualizar el estado con los datos de productos obtenidos
      setProducts(resp.data);
      // Comparar la longitud de productos antes y después de actualizar
      // para evitar actualizar innecesariamente el estado
      if (products.length !== resp.data.length) {
        setProducts(resp.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Función para manejar el cambio en el campo de búsqueda
  const handleChange = async (e) => {
    // Filtrar productos basados en el nombre del producto
    const productoBuscado = products.filter((product) => {
      // Expresión regular para la búsqueda insensible a mayúsculas y minúsculas
      const regex = new RegExp(e.target.value, "i");
      return regex.test(product.Nombre_Producto);
    });
    // Actualizar el estado con los productos filtrados
    setProducts(productoBuscado);
    
    try {
      // Obtener todos los productos nuevamente si el campo de búsqueda está vacío
      const resp = await axios.get("http://localhost:8000/products");
      if (e.target.value === "") {
        setProducts(resp.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Efecto que se ejecuta solo al montar el componente para obtener los productos
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
    <Header/>
    
      <div className="d-flex justify-content-center my-5">
        <input type="text" className="form-control w-50" placeholder="Buscador de productos..." name="nombreProducto" onChange={handleChange} required />        
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5 ">
        <Link to={"/productos/table"} className="btn btn-success">Crear Productos</Link>
      </div>
  
      <div className="row w-100 justify-content-center">      
        {products?.map(product => <CardProducts key={product.id_producto} {...product} />)}
      </div>


     
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Link to={"/home"} className="btn btn-primary">Volver</Link>
      </div>

      
    </>
  )
}

export default ViewProducts;