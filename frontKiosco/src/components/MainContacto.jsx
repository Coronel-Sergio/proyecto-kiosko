
import { Col, Row, Card } from "react-bootstrap"
import { Link} from 'react-router-dom'
import profileLuk from "../images/profileLuk.jpg"
import emanuel from "../images/emanuel.jpg"
import maicol from "../images/maicol.jpg"
import pedro from "../images/pedro.jpg"
import sergio from "../images/sergio.jpg"
import mark from "../images/mark.jpg"
import "../css/image.css"
import { IoLogoWhatsapp } from "react-icons/io";

const MainContacto = () => {



    return (
        <>
       
            <h2 className='text-center mt-5 mb-5'>Nuestros Contactos</h2>
            
            
            <div className='card'>



                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Marcos Arias</Card.Title>
                                <Card.Img src={mark} className="card-img" />
                                <Card.Text>Legajo: 50665</Card.Text>
                                <Card.Text>
                                    Contacto: <Link to={"https://wa.me/+5493813534617"} className="btn btn-success"><IoLogoWhatsapp /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Romero Lucas</Card.Title>
                                <Card.Img src={profileLuk} className="card-img" />
                                <Card.Text>Legajo: 59121</Card.Text>
                                <Card.Text>
                                    Contacto: <Link to={"https://wa.me/+5493814799113"} className="btn btn-success"><IoLogoWhatsapp /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Aguirre Emanuel</Card.Title>
                                <Card.Img src={emanuel} className="card-img" />
                                <Card.Text>Legajo: 59277</Card.Text>
                                <Card.Text>
                                    Contacto: <Link to={"https://wa.me/+5493813866499"} className="btn btn-success"><IoLogoWhatsapp /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Coronel Sergio</Card.Title>
                                <Card.Img src={sergio} className="card-img" />
                                <Card.Text>Legajo: 58732 </Card.Text>
                                <Card.Text>
                                    Contacto: <Link to={"https://wa.me/+5493865676999"} className="btn btn-success"><IoLogoWhatsapp /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Almiron Maicol</Card.Title>
                                <Card.Img src={maicol} className="card-img" />
                                <Card.Text>Legajo: 58952 </Card.Text>
                                <Card.Text>
                                    Contacto: <Link to={"https://wa.me/+5493816660527"} className="btn btn-success"><IoLogoWhatsapp /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="custom-card">
                            <Card.Body className="card-body">
                                <Card.Title>Cordoba Pedro</Card.Title>
                                <Card.Img src={pedro} className="card-img" />
                                <Card.Text>Legajo: 59268 </Card.Text>
                                <Card.Text>
                                    Contacto: <Link to={"https://wa.me/+5493813944576"} className="btn btn-success"><IoLogoWhatsapp /></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="text-center mb-5 mt-5">
                <Link to={"/home"} className='btn btn-primary'>Volver</Link>
            </div>

   

        </>
    )
}

export default MainContacto
