import './NavBar.css';
import Dropdown from '../Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const NavBar = () => {
// TODO make navbar the hamburger, when clicked displays all the below
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = (e) => {
        setShow(false);
    }

    return (
        <nav>
            <div className='navbar__burger'
                renderMenuOnMount={true}
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
            >
                <FontAwesomeIcon icon="fa-solid fa-bars">
                        {show && <Dropdown />}
                        {/* <Dropdown /> */}
                </FontAwesomeIcon>
            </div>
        </nav>
    )
}

export default NavBar;