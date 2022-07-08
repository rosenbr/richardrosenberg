import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dropdown = () => {

    return(
        <div className='dropdown'>
            <ul>
                <li>
                    <a href="https://github.com/rosenbr">
                        <FontAwesomeIcon icon="fa-brands fa-github-square" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/richardrosenberg88/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li><a href="#about__link">About</a></li>
                <li><a href="#projects__link">Projects</a></li>
                <li><a href="#skills__link">Skills</a></li>
                <li><a href="#contact__link">Contact</a></li>
            </ul>
        </div>
    )
}

export default Dropdown;