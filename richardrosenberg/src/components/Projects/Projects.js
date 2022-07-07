import './Projects.css';

const Projects = (props) => {

    return (
        <div>
            <a id="projects__link">
            <h1>{props.projects.name}</h1>
            <a href ={props.projects.repo}>GitHub logo here</a>
            <p>{props.projects.description}</p>
            <img src={props.projects.image} alt="Project Screenshot"></img>
            </a>
        </div>
    )
}

export default Projects;