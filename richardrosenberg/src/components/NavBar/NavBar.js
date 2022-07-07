import './NavBar.css';
// import nav logo/button

const NavBar = ({sticky}) => {

    return (
        <nav>
            <div>
                {/* <img src={} alt="Logo" /> */}
                <h6>navbar placeholder</h6>
            </div>
            <ul>
                <li><a href="#about__link">About</a></li>
                <li><a href="#projects__link">Projects</a></li>
                <li><a href="#skills__link">Skills</a></li>
                <li><a href="#contact__link">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;