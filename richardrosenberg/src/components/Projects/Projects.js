import './Projects.css';

const Projects = (props) => {

    return (
        <div>
            <h1>{props.projects.name}</h1>
            <a href ={props.projects.repo}>GitHub logo here</a>
            <p>{props.projects.description}</p>
        </div>
    )
}

export default Projects;