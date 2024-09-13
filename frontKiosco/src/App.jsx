import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Proveedores from "./pages/Proveedores/Proveedores"
import Clients from "./pages/Clients/Clients"
import ViewClient from "./pages/ViewClient/ViewClient"
import CreateClient from "./pages/CreateClient/CreateClient"
import UpdateClient from "./pages/UpdateClient/UpdateClient"
import MostrarEmpleados from "./pages/MostrarEmpleados/MostrarEmpleados"
import AgregarEmpleado from "./pages/AgregarEmpleado/AgregarEmpleado"
import EditarEmpleado from "./pages/EditarEmpleados/EditarEmpleados"
import { MainHome } from "./components/MainHome/MainHome"
import { AgregarPedido } from "./pages/AgregarPedido/AgregarPedido"
import { VerPedido } from "./pages/VerPedido/VerPedido"
import './App.css'
import Ventas from "./pages/Ventas/Ventas"
import MainViewVentas from "./components/MainViewVentas/MainViewVentas"
import CreateVentas from "./pages/CreateVentas/CreateVentas"
import UpdateVentas from "./pages/UpdateVentas/UpdateVentas"
import Mostrar from "./pages/Mostrar/Mostrar"
import Agregar from "./pages/Agregar/Agregar"
import EditarPage from "./pages/EditarPage/EditarPage"
import Contacto from "./pages/Contacto"
import ViewProducts from "./pages/ViewProducts/ViewProducts"
import Home from "./pages/Home/Home"
import ProductsAdmin from "./pages/ProductsAdmin/ProductsAdmin"
import SobreNosotros from "./pages/Sobre-Nosotros/SobreNosotros"



const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<ViewProducts />} />
        <Route path="/productos/table" element={<ProductsAdmin />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/clients" element= {<Clients />}/>
        <Route path="/clients/view/:id" element= {<ViewClient />}/>
        <Route path="/clients/create" element= {<CreateClient />}/>
        <Route path="/clients/edit/:id" element={<UpdateClient />}/>
        <Route path='/Empleados' element={<MostrarEmpleados />}/>
        <Route path='/Empleados/crear' element={<AgregarEmpleado />}/>
        <Route path='/Empleados/editar/:id' element={<EditarEmpleado />}/>
        <Route path = "/pedidos" element={<MainHome />}/>
        <Route path = "/pedidos/agregar" element = {<AgregarPedido />}/>
        <Route path = "/pedidos/ver/:id" element = {<VerPedido/>}/>
        <Route path="/ventas" element= {<Ventas/>}/>
        <Route path="/ventas/view/:id" element= {<MainViewVentas/>}/>
        <Route path="/ventas/create" element= {<CreateVentas/>}/>
        <Route path="/ventas/edit/:id" element={<UpdateVentas/>}/>
        <Route path="/categorias" element={<Mostrar />} />
        <Route path="/categorias/agregar" element={<Agregar/>} />
        <Route path="/categorias/editar/:id" element={<EditarPage/>} /> 
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/sobre-nosotros" element={<SobreNosotros/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
