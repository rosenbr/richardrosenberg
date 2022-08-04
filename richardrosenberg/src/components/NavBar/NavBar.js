import './NavBar.css';
import Dropdown from '../Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <nav>
            <div className='navbar__burger'>
                <FontAwesomeIcon icon="fa-solid fa-bars" 
                    onMouseOver={() => setMenu(true)}
                    onMouseLeave={() => setMenu(false)}>
                </FontAwesomeIcon>
                    {menu && (
                        <div>
                            <Dropdown/>
                        </div>
                    )}
            </div>
        </nav>
    )
}

export default NavBar;