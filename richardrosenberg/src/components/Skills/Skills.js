import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skills = () => {

    return (
        <div className="skills">
            <a id="skills__link">
            <h3 className="skills__header" >Skills</h3>
            <div className="skills__icons">
                <FontAwesomeIcon icon="fa-brands fa-js-square" size='6x' className='skills__icon'/>
                <FontAwesomeIcon icon="fa-brands fa-html5" size='6x' className='skills__icon'/>
                <FontAwesomeIcon icon="fa-brands fa-css3" size='6x' className='skills__icon'/>
                <FontAwesomeIcon icon="fa-brands fa-react" size='6x' className='skills__icon'/>
                <FontAwesomeIcon icon="fa-brands fa-python" size='6x' className='skills__icon'/>
                <FontAwesomeIcon icon="fa-brands fa-node" size='6x' className='skills__icon'/>
                <FontAwesomeIcon icon="fa-brands fa-github-square" size='6x' className='skills__icon'/>
            </div>
            </a>
        </div>
    )
}
export default Skills;