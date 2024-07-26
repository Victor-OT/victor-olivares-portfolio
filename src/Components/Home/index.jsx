import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import './Home.css'

function Home () {
    return (
        <section className="home">
            <Container className="home-container">
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6} className="main-text-container">
                        <span className="tagline">Mi Portafolio</span>
                        <h1>Hola! Soy Victor Olivares, Frontend Developer</h1>
                        <p>Soy desarrollador Frontend, apasionado por la tecnología. Tengo conocimientos en diferentes herramientas de desarrollo que me permiten desenvolverme de manera fluída. Busco oportunidades para aplicar mis habilidades y continuar aprendiendo en un entorno dinámico y colaborativo.</p>
                        <button onClick={() => console.log('Connect')}>Let's connect <ArrowRightCircle size={24}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <img src="/header-img.svg" alt="" className="header-image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export {Home}