import Carousel from "react-multi-carousel";
import { Container,Row,Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import './Skills.css'

function Skills () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-container">
                            <h2>Skills</h2>
                            <p>Como desarrollador Frontend, manejo diversas tecnologías y frameworks modernos, creando interfaces intuitivas y optimizadas para todos los dispositivos.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src="/logos/html.svg" alt="html" />
                                </div>
                                <div className="item">
                                    <img src="/logos/css.svg" alt="css" />
                                </div>
                                <div className="item">
                                    <img src="/logos/js.svg" alt="js" />
                                </div>
                                <div className="item">
                                    <img src="/logos/react.svg" alt="react" />
                                </div>
                                <div className="item">
                                    <img src="/logos/react-bootstrap.svg" alt="rb" />
                                </div>
                                <div className="item">
                                    <img src="/logos/tailwindcss.svg" alt="tailwindcss" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export {Skills}