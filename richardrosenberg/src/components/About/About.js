import './About.css';
import ProfilePic from '../pics/PP.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    return(
        <div className="about">
            <a id="about__link" href>
            <div className='about__top'>
                <div className='about__me'>
                    <img src={ProfilePic} alt="Richard Rosenberg" className='about__pic'></img>
                </div>
                <div className="about__header">
                    <h2 className='about__brand'>Richard Rosenberg</h2>
                    <h4 className='about__brand'>Software Engineer</h4>
                    <h4 className='about__brand'>Cat Shirt Aficionado</h4>
                </div>
                <div className="about__links">
                    <a href="https://www.linkedin.com/in/richardrosenberg88/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" size='8x' className='about__icon'/>
                    </a>
                    <br></br>
                    <a href="https://github.com/rosenbr">
                        <FontAwesomeIcon icon="fa-brands fa-github-square" size='8x' className='about__icon'/>
                    </a>
                </div>
            </div>
            <div className='about__words'>
                <h2 className="about__header about__title">About Me</h2>
                <p className="about__p1">Hello! I'm Richard, a software engineer with a background in customer service. After fulfilling a long-time goal of building my own PC, I wanted to learn more about the software side of tech, so I joined General Assembly's Software Engineering Immersive. After 12 weeks of building my skills as a full-stack developer, I am eager to join a team of talented people where I can continue to build my skills and knowledge!</p>
                <p className="about__p1">Feel free to conect with me on LinkedIn!</p>
            </div>
            </a>
        </div>
    )
}

export default About;