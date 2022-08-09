import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav>
            <div className='navbar__burger'
            onMouseOver={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}>
                <FontAwesomeIcon icon="fa-solid fa-bars" size='2x'className='navbar__icon'>
                </FontAwesomeIcon>
                    {menu && (
                        <div className='navbar__menu'>
                            <ul>
                                <li className='navbar__listItem'><a href="#about__link">About</a></li>
                                <li className='navbar__listItem'><a href="#projects__link">Projects</a></li>
                                <li className='navbar__listItem'><a href="#skills__link">Skills</a></li>
                                <li className='navbar__listItem'><a href="#contact__link">Contact</a></li>
                                <li className='navbar__listItem'>
                                    <a href="https://github.com/rosenbr">
                                        <FontAwesomeIcon icon="fa-brands fa-github-square" />
                                    </a>
                                </li>
                                <li className='navbar__listItem'>
                                    <a href="https://www.linkedin.com/in/richardrosenberg88/">
                                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
            </div>
        </nav>
    )
}

export default NavBar;