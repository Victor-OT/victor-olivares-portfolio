import { useState, useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '/logo.svg'
import navIcon1 from '/nav-icon1.svg'
import navIcon2 from '/nav-icon2.svg'
import navIcon3 from '/nav-icon3.svg'
import './NavBar.css'

function NavBar () {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onscroll)
    }, [])

    const onActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link 
                            href="#home" 
                            className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}
                            onClick={() => onActiveLink('hprojects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="icon1" /></a>
                            <a href="#"><img src={navIcon2} alt="icon2" /></a>
                            <a href="#"><img src={navIcon3} alt="icon3" /></a>
                        </div>
                        <button onClick={() => console.log('Connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export {NavBar}