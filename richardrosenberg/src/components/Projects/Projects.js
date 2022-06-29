import './Projects.css';

const Projects = (props) => {

    return (
        <div>
            <h1>{props.projects.name}</h1>
            <a href ={props.projects.repo}>GitHub logo here</a>
            <p>{props.projects.description}</p>
            <img src={props.projects.image} alt="Project Screenshot"></img>
        </div>
    )
}

export default Projects;