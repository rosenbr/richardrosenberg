import './About.css';
import ProfilePic from '../pics/PP.jpg';

const About = () => {

    return(
        <div class="info__about">
            <h2 class="info__header">Richard Rosenberg</h2>
            <img src={ProfilePic} alt="Richard Rosenberg"></img>
            <h3 class="info__header">About Me</h3>
            <p class="about__infoP2">After working in the restaurant industry for over 10 years, I decided it was time for a change. I took the plunge into the world of tech head first by joining General Assembly and starting the Software Engineering Immersive. After 12 long weeks of sleepless nights, insane stress, and thoughts of quiting and returning to bartending, I made it through! It was by far one of the most challenge experiences of my life, that was only made more difficult as I had no background in any tech aside from using Point Of Sale terminals while bartending. I didn't even have a working laptop/desktop for those 10 years!</p>
            <p class="info__aboutP3">Being able to adapt to new experiences and situations was immensely helpful on my journey to not only becoming a dev, but on the journey of life as well. When the pandemic hit, I took it as an opportunity to learn something new and adapt to the changing world.</p>
            <div class="info__links">
                <a href="https://www.linkedin.com/in/richardrosenberg88/">LinkedIn icon
                    {/* <i class="fab fa-linkedin fa-5x" id="fa-Linkedin__info"></i> */}
                </a>
                <br></br>
                <a href="https://github.com/rosenbr">GitHub icon
                    {/* <i class="fab fa-github-square fa-5x" id="fa-github-square__info"></i> */}
                </a>
            </div>
        </div>
    )
}

export default About;