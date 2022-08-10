import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Skills = () => {

    return (
        <div className="skills">
            <a id="skills__link" href>
            <h2 className="skills__header" >Skills</h2>
            <div className="skills__icons">
                <div className='skills__js'>
                    <FontAwesomeIcon icon="fa-brands fa-js-square" size='6x' className='skills__icon'/>
                    <h4>JavaScript</h4>
                </div>
                <div className='skills__html'>
                    <FontAwesomeIcon icon="fa-brands fa-html5" size='6x' className='skills__icon'/>
                    <h4>HTML</h4>
                </div>
                <div className='skills__css'>
                    <FontAwesomeIcon icon="fa-brands fa-css3" size='6x' className='skills__icon'/>
                    <h4>CSS</h4>
                </div>
                <div className='skills__react'>
                    <FontAwesomeIcon icon="fa-brands fa-react" size='6x' className='skills__icon'/>
                    <h4>React</h4>
                </div>
                <div className='skills__python'>
                    <FontAwesomeIcon icon="fa-brands fa-python" size='6x' className='skills__icon'/>
                    <h4>Python</h4>
                </div>
                <div className='skills__node'>
                    <FontAwesomeIcon icon="fa-brands fa-node" size='6x' className='skills__icon'/>
                    <h4>Node</h4>
                </div>
                <div className='skills__github'>
                    <FontAwesomeIcon icon="fa-brands fa-github-square" size='6x' className='skills__icon'/>
                    <h4>GitHub</h4>
                </div>
            </div>
            </a>
        </div>
    )
}
export default Skills;