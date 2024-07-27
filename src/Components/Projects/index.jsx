import { Container, Row, Col } from "react-bootstrap"
import { ProjectCard } from "../ProjectCard"
import './Projects.css'

function Projects () {
    const projects = [
        {title: 'Shoppi', description: 'Ecommerce', imgUrl: 'https://i.imgur.com/wGTDgfT.png', webUrl:'https://shoppimarket.netlify.app', github:'https://github.com/Victor-OT/shoppi'},
        {title: 'Batatabit', description:'Landing Page', imgUrl: 'https://i.imgur.com/OeRqLv0.png', webUrl:'https://batatabittrading.netlify.app', github:'https://github.com/Victor-OT/batatabit'},
        {title: 'Taskmaster', description: 'Ecommerce', imgUrl: 'https://i.imgur.com/DgRtpP9.png', webUrl:'https://taskmastermanager.netlify.app', github:'https://github.com/Victor-OT/taskmaster'}
    ]

    return (
        <section className="projects-container">
            <h2>Projects</h2>
            <Container>
                <Row>
                    {
                        projects?.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                webUrl={project.webUrl}
                                github={project.github}
                                />
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export { Projects }