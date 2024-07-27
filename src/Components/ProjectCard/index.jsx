import { Col } from "react-bootstrap"
import './ProjectCard.css'

function ProjectCard (props) {
    return (
        <Col xs={12} md={6} xl={4}>
            <div className="project-card-container">
                    <img src={props.imgUrl} alt="bg" />
                    <div className="project-card-text">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <div className="links">
                            <p><a href={props.webUrl}>Ir a la página</a></p>
                            <p><a href={props.github}>Github</a></p>
                        </div>
                    </div>
            </div>
        </Col>
    )
}

export {ProjectCard}