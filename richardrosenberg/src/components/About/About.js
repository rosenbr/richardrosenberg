import './About.css';
import ProfilePic from '../pics/PP.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {

    return(
        <div className="about">
            <a id="about__link">
            <div className='about__top'>
                <div className='about__me'>
                    <h2 className="about__header">Richard Rosenberg</h2>
                    <img src={ProfilePic} alt="Richard Rosenberg" className='about__pic'></img>
                </div>
                <div className="about__links">
                    <a href="https://www.linkedin.com/in/richardrosenberg88/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" size='8x' />
                    </a>
                    <br></br>
                    <a href="https://github.com/rosenbr">
                        <FontAwesomeIcon icon="fa-brands fa-github-square" size='8x' />
                    </a>
                </div>
            </div>
            <div className='about__words'>
                <h3 className="about__header">About Me</h3>
                <p className="about__p1">After working in the restaurant industry for over 10 years, I decided it was time for a change. I took the plunge into the world of tech head first by joining General Assembly and starting the Software Engineering Immersive. After 12 long weeks of sleepless nights, insane stress, and thoughts of quiting and returning to bartending, I made it through! It was by far one of the most challenge experiences of my life, that was only made more difficult as I had no background in any tech aside from using Point Of Sale terminals while bartending. I didn't even have a working laptop/desktop for those 10 years!</p>
                <p className="about__p2">Being able to adapt to new experiences and situations was immensely helpful on my journey to not only becoming a dev, but on the journey of life as well. When the pandemic hit, I took it as an opportunity to learn something new and adapt to the changing world.</p>
            </div>
            </a>
        </div>
    )
}

export default About;