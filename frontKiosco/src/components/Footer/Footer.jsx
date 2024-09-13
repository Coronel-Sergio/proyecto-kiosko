import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-dark text-white py-4 text-center" data-bs-theme="dark">
      <h4>UTN FRT, Derechos reservados 2024</h4>
       <Link to={"/sobre-nosotros"}>Sobre Nosotros</Link>
    </div>
  )
}

export default Footer