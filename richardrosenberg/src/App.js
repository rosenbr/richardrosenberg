import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import NoodsScreenshot from './components/pics/Noods_Screenshot.jpg';
import PachyScreenshot from './components/pics/Pachy_Screenshot.png';
import CalcScreenshot from './components/pics/Calculator_Screenshot.png';
import WayScreenshot from './components/pics/Wayfarer_Screenshot.jpg';

function App() {
  
  let projects = [
    {
        name: 'Noods',
        repo: 'https://github.com/rosenbr/capstone',
        description: "Noods allows users to post their own recipes for Instant Noodles as well as comment on other user's recipes. Users can update their profile, posted recipes, and comments. While taking the Software Engineering Immersive through General Assembly, I was eating a lot of Instant Noodles to save money. After a few weeks it got repetitive and boring so I would come up with ways to 'spice it up' and wanted to a place for others to be able to do the same! Noods is currently still in development with plans for more features to be added in the future. For the time being, you can use the current version",
        image: NoodsScreenshot
    },
    {
      name: 'Calculator',
        repo: 'https://github.com/rosenbr/sprint__calc',
        description: "The Calculator app is a simple calculator I built using HTML, CSS, and JavaScript and deployed using GitHub Pages. It was built as a part of General Assembly’s “Sprint Week.” Which is a way to get another project under my belt. It is fully functional and mobile responsive. The calculator is deployed ",
        image: CalcScreenshot
    },
    {
      name: 'Pachy-Gatchi',
        repo: 'https://github.com/rosenbr/pachy-gotchi',
        description: "Pachy-gotchi is a twist on the classic Tomagotchi toy. This was my first time creating an app that had any kind of functionality. It is very basic and visually not the most appealing, but a few weeks before creating it I could barely write a 'for loop.' It will always hold a special place in my heart as my first real creation! The inspiration for using a pachycephalosaurus came from the feeling of banging my head against a wall while learning the basics of JavaScript.",
        image: PachyScreenshot
    },
    {
      name: 'Wayfarer',
        repo: 'https://github.com/rosenbr/Project_2',
        description: "Wayfarer is an app for users to create posts about cities they have visited, specifically for some summer time fun. The focus of this project was two fold. First to work with and meet client expectations. Secondly, to work in a team and divide tasks and collaborate with my team members. This project was divided into Sprints that we had to meet the requirements of before being approved to move onto the next one. This app has been deployed with no plans for future updates. You can check out the latest version ",
        image: WayScreenshot
    }
]

  return (
    <div className="App">
      <h1>Lets fuggin gooooooooooo</h1>
      <NavBar></NavBar>
      <About></About>
      <Skills></Skills>
      {/* <Projects></Projects> */}
      {projects.map((projects) => (<Projects projects={projects} />))}
      <Contact></Contact>
    </div>
  );
}

export default App;
