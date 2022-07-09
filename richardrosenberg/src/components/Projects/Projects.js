import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = (props) => {

    return (
        <div className='projects'>
            <a id="projects__link">
            <div className='projects__header'>
                <img src={props.projects.image} alt="Project Screenshot" className='projects__pic'></img>
                <div className='projects__words'>
                    <div className='projects__wordsTop'>
                        <h1 className='projects__info'>{props.projects.name}</h1>
                        <a href ={props.projects.repo} className='projects__info'><FontAwesomeIcon icon="fa-brands fa-github-square" size='3x'/></a>
                    </div>
                    <p>{props.projects.description}</p>
                </div>
            </div>
            </a>
        </div>
    )
}

export default Projects;