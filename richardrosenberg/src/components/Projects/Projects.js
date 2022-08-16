import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// TODO add pop-ups for cats to appear when hovering on projects
// TODO try and have a diff cat for each project?
// TODO use code from navbar 

const Projects = (props) => {

    return (
            <div className='projects'>
                <a id="projects__link" href>
                <div className='projects__header'>
                    <img src={props.projects.image} alt="Project Screenshot" className='projects__pic'></img>
                    <div className='projects__words'>
                        <div className='projects__wordsTop'>
                            <h1 className='projects__info' id='project__title'>{props.projects.name}</h1>
                            <a href ={props.projects.repo} className='projects__info'><FontAwesomeIcon icon="fa-brands fa-github-square" size='2x'/></a>
                        </div>
                        <p className='projects__p'>{props.projects.description}</p>
                    </div>
                </div>
                </a>
            </div>
    )
}

export default Projects;