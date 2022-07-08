import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skills = () => {

    return (
        <div class="about__skills">
            <a id="skills__link">
            <h3 class="about__header" >Skills</h3>
            <div class="about__icons">
                <FontAwesomeIcon icon="fa-brands fa-js-square" />
                <FontAwesomeIcon icon="fa-brands fa-html5" />
                <FontAwesomeIcon icon="fa-brands fa-css3" />
                <FontAwesomeIcon icon="fa-brands fa-react" />
                <FontAwesomeIcon icon="fa-brands fa-python" />
                <FontAwesomeIcon icon="fa-brands fa-node" />
                <FontAwesomeIcon icon="fa-brands fa-github-square" />
            </div>
            </a>
        </div>
    )
}
export default Skills;