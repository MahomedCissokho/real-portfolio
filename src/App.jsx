import {useEffect, useState} from "react";
import Skills from "./components/Skills.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SocialNetwork from "./components/SocialNetwork.jsx";
import DevDesign from "./components/DevDesign.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";

function App() {

    const [darkMode, setDarkMode] = useState(false)
    const [loading, setLoading] = useState(true)

    const toggleDarkMode = () => {
      setDarkMode(!darkMode)
    }
    
    useEffect(() => {
        const triggerAnimation = () => {
           setLoading(false)
        }
        setTimeout(triggerAnimation, 3000)

    }, []);


    return loading ? <Loader/>  : (
      <div className={`${darkMode && "dark"}`}>
          <div className='w-screen h-screen dark:bg-slate-900 '>
            
              <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />


              <div className='w-screen h-screen dark:bg-slate-900 ' id='about-me'>
                  <AboutMe/>
              </div>

              <div className='-mt-10 dark:bg-slate-900'>
                  <SocialNetwork/>
              </div>
              <div className='pt-20 dark:bg-slate-900'>
                <DevDesign/>
              </div>
              <div className='w-screen pt-24 dark:bg-slate-900' id='projects'>
                <Projects/>
              </div>
              <div className='w-screen pt-24 dark:bg-slate-900' id='skills'>
                  <Skills/>
              </div>

              <div className='w-screen pb-20 dark:bg-slate-900' id='contact'>
                  <Contact/>
              </div>
              <div className=' dark:bg-slate-900 bg-[#263238] '>
                  <Footer/>
              </div>

          </div>

      </div>
        )
  
}

export default App
