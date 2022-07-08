import './NavBar.css';
import Dropdown from '../Dropdown/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
// TODO make navbar the hamburger, when clicked displays all the below
    return (
        <nav>
            <div className='navbar__burger'>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </div>
            <Dropdown />
        </nav>
    )
}

export default NavBar;