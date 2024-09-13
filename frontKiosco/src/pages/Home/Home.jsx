import { Card, Col, Row } from "react-bootstrap"
import { BiSolidCategory } from "react-icons/bi"
import { BsFillFilePersonFill } from "react-icons/bs"
import { FaBook } from "react-icons/fa"
import { IoIosCreate, IoIosPerson } from "react-icons/io"
import { IoCart, IoPerson } from "react-icons/io5"
import { Link } from "react-router-dom"
import './home.css'
import { Header } from "../../components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../components/Footer/Footer"


const Home = () => {
  return (
    <>
        <Header/>
        <br />
        <br />
        <h3 className='text-center'>Seleccione una opción del menú</h3>
        <br />
        <br />
        <div className='card'>
                <Row>
                    <Col md={3} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Vender</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/1772/1772099.png"} className="card-img" />
                                
                                <Card.Text>Hacer una venta</Card.Text>
                                <Card.Text>
                                
                                  <Link to= {"/ventas"}className='btn btn-primary'><IoCart /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Productos</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/1170/1170577.png"} className="card-img" />
                                
                                <Card.Text>Ver los productos</Card.Text>
                                <Card.Text>
                                    <Link to= {"/productos"} className='btn btn-primary'><IoIosCreate /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Proveedores</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/4003/4003697.png"} className="card-img" />
                                <Card.Text>Mis Proveedores</Card.Text>
                                <Card.Text>
                                 <Link to="/proveedores" className='btn btn-primary'><BsFillFilePersonFill /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Categorias</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/3843/3843517.png"} className="card-img" />
                                <Card.Text>Categorias</Card.Text>
                                <Card.Text>
                                 <Link to={"/categorias"} className='btn btn-primary'><BiSolidCategory /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Clientes</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/6009/6009864.png"} className="card-img" />
                                <Card.Text>Mis Clientes</Card.Text>
                                <Card.Text>
                                  <Link to={"/clients"} className='btn btn-primary'><IoPerson /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Pedidos</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/2558/2558162.png"} className="card-img" />
                                <Card.Text>Mis pedidos</Card.Text>
                                <Card.Text>
                                <Link to={"/pedidos"} className='btn btn-primary'><FaBook /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Empleados</Card.Title>
                                <Card.Img src={"https://cdn-icons-png.flaticon.com/512/554/554795.png"} className="card-img" />
                                <Card.Text>Ver Empleados</Card.Text>
                                <Card.Text>
                                <Link to={"/Empleados"} className='btn btn-primary'><IoIosPerson /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
                <br />
            </div>       
            <br />
        <Footer /> 
    </>
  )
}

export default Home