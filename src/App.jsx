import {useEffect, useState} from "react";
import {HashLink as Link} from "react-router-hash-link";
import Skills from "./components/Skills.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SocialNetwork from "./components/SocialNetwork.jsx";
import DevDesign from "./components/DevDesign.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

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
              <div className='sticky shadow-sm'>
                  <div className='flex items-center justify-between max-w-6xl px-3 py-6 mx-auto'>
                      <div className='flex  space-x-6 md:space-x-10 sm:text-xl text-lg text-[#ccc] font-semibold'>
                          <Link to='#about-me' className='font-bold text-green-400 transition-all duration-300 hover:text-green-400'>About Me</Link>
                          <Link to='#projects' className ='transition-all duration-300  hover:text-green-400'>Projects</Link>
                          <Link to='#skills' className ='transition-all duration-300 hover:text-green-400'>Skills</Link>
                      </div>
                      <button className='flex self-center transition-all duration-200 rounded-full shadow-xl cursor-pointer bg-neutral-900 hover:bg-neutral-800 hover:scale-110 ' onClick={toggleDarkMode}>
                          <span className='p-1 text-lg font-bold text-center text-white rounded-full md:text-xl dark:text-neutral-800 dark:bg-white ' title='Switch Mode'>MC</span>
                      </button>
                      <div className='flex self-center text-sm font-bold text-white transition-all duration-300 bg-green-500 rounded sm:text-lg justify-self-center hover:bg-green-500/90 '>
                          <a className='px-4 py-3 font-bold' href="./assets/mc_cv.pdf" download="CV.pdf">
                              Get In Touch
                          </a>
                      </div>
                  </div>
              </div>


              <div className='flex items-center justify-between max-w-5xl mx-auto mt-10 mb-16 ' id='about-me'>
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
