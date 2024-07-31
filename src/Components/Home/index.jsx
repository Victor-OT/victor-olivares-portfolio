import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import './Home.css'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Home () {
    return (
        <section className="home" id="home">
            <Container className="home-container">
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6} className="main-text-container">
                        <TrackVisibility>
                            {({isVisible}) => (
                                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                    <span className="tagline">Mi Portafolio</span>
                                    <h1>Hola! Soy Victor Olivares, Frontend Developer</h1>
                                    <p>Soy desarrollador Frontend, apasionado por la tecnología. Tengo conocimientos en diferentes herramientas de desarrollo que me permiten desenvolverme de manera fluída. Busco oportunidades para aplicar mis habilidades y continuar aprendiendo en un entorno dinámico y colaborativo.</p>
                                    <a href="#contact"><button>Let's connect <ArrowRightCircle size={24}/></button></a>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <TrackVisibility>
                            {({isVisible}) => (
                                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                    <img src="/header-img.svg" alt="" className="header-image"/>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export {Home}