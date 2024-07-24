import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import './Home.css'

function Home () {
    return (
        <section className="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6} className="main-text-container">
                        <span className="tagline">Mi Portafolio</span>
                        <h1>Hola! Soy Victor Olivares, Frontend Developer</h1>
                        <p>Soy un desarrollador frontend junior con experiencia en JavaScript, HTML5 y CSS. Utilizo React como framework principal y tengo habilidades en Bootstrap y TailwindCSS. Poseo conocimientos en diseño responsivo para garantizar una experiencia óptima en todos los dispositivos y pantallas. Busco oportunidades para aplicar mis habilidades y continuar aprendiendo en un entorno dinámico y colaborativo.</p>
                        <button onClick={() => console.log('Connect')}>Let's connect <ArrowRightCircle size={24}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src="../../../public/header-img.svg" alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export {Home}