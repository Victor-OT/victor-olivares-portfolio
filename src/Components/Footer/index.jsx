import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from '/nav-icon1.svg'
import navIcon2 from '/nav-icon2.svg'
import navIcon3 from '/nav-icon3.svg'
import './Footer.css'

function Footer () {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <h3>Victor Breaker</h3>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon justify-content-end">
                            <a href=""><img src={navIcon1} alt="icon-1" /></a>
                            <a href=""><img src={navIcon2} alt="icon-2" /></a>
                            <a href=""><img src={navIcon3} alt="icon-3" /></a>
                        </div>
                        <p>Copyright 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export {Footer}