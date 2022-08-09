import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skills = () => {

    return (
        <div className="skills">
            <a id="skills__link" href>
            <h2 className="skills__header" >Skills</h2>
            <div className="skills__icons">
                <FontAwesomeIcon icon="fa-brands fa-js-square" size='6x' className='skills__icon'/>
                <h4>JavaScript</h4>
                <FontAwesomeIcon icon="fa-brands fa-html5" size='6x' className='skills__icon'/>
                <h4>HTML</h4>
                <FontAwesomeIcon icon="fa-brands fa-css3" size='6x' className='skills__icon'/>
                <h4>CSS</h4>
                <FontAwesomeIcon icon="fa-brands fa-react" size='6x' className='skills__icon'/>
                <h4>React</h4>
                <FontAwesomeIcon icon="fa-brands fa-python" size='6x' className='skills__icon'/>
                <h4>Python</h4>
                <FontAwesomeIcon icon="fa-brands fa-node" size='6x' className='skills__icon'/>
                <h4>Node</h4>
                <FontAwesomeIcon icon="fa-brands fa-github-square" size='6x' className='skills__icon'/>
                <h4>GitHub</h4>
            </div>
            </a>
        </div>
    )
}
export default Skills;