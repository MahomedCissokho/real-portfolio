import Header from "./components/Header.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SocialNetwork from "./components/SocialNetwork.jsx";
import DevDesign from "./components/DevDesign.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

function App() {

  return (
      <div className>
          <div className='w-screen h-screen dark:bg-neutral-800'>
              <Header/>
              <AboutMe/>
              <SocialNetwork/>
              <DevDesign/>
              <Projects/>
              <Skills/>

          </div>
      </div>

  )
}

export default App
