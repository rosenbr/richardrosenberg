import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = (props) => {

    return (
        <div>
            <a id="projects__link">
            <h1>{props.projects.name}</h1>
            <a href ={props.projects.repo}><FontAwesomeIcon icon="fa-brands fa-github-square" /></a>
            <p>{props.projects.description}</p>
            <img src={props.projects.image} alt="Project Screenshot"></img>
            </a>
        </div>
    )
}

export default Projects;