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
                {/* Links */}
                <li><a href="#top">Back to Top</a></li>
                <li><a href="about">About</a></li>
                <li>Projects</li>
                <li><a href="skills">Skills</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;