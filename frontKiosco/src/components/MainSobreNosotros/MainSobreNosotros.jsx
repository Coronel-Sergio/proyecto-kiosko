import React from 'react'
import { Link } from 'react-router-dom'
const MainSobreNosotros = () => {
  return (
    <>
        <h2 className='text-center mt-5 mb-5'>Sobre Nosotros</h2>

            
            <div className="row justify-content-center my-5">
                <div className="col-md-8">
                    <div className="nosotros text-center ">
                        <h3>Nuestro equipo de programación!</h3>
                        <br />
                        <br />
                        <p>
                            Como estudiantes de programación en la UTN - FRT, nuestro enfoque principal es el desarrollo web moderno. Nos apasiona aprender y aplicar nuevas tecnologías para resolver problemas de manera innovadora.
                        </p>
                        <br />
                        <h3>Nuestros Futuros Planes</h3>
                        <br />
                        <br />
                        <p>
                            Nuestros planes futuros incluyen participar activamente en competencias y desafíos relacionados con la programación, donde podamos demostrar nuestras habilidades y conocimientos adquiridos. También aspiramos a desarrollar proyectos que no solo nos permitan aplicar nuestros conocimientos, sino que también contribuyan positivamente a nuestra comunidad académica y profesional.
                        </p>
                        <br />
                        <h3>Nuestros Objetivos</h3>
                        <br />
                        <br />
                        <p>
                            Como grupo, nuestro objetivo principal es mejorar nuestras habilidades técnicas y de colaboración, fortaleciendo nuestro entendimiento práctico de la programación a través de proyectos significativos y desafiantes. Buscamos convertirnos en desarrolladores competentes y adaptativos, listos para enfrentar los retos del mundo real en el campo de la tecnología.
                        </p>
                    </div>
                </div>
            </div>

          
            
            <div className='text-center mt-5 mb-5'>
                <Link to={"/home"} className='btn btn-primary' >Volver</Link>
            </div>
    
    </>
  )
}

export default MainSobreNosotros