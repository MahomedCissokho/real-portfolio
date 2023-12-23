import { useState} from "react";
import {HashLink as Link} from "react-router-hash-link";
import Skills from "./components/Skills.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SocialNetwork from "./components/SocialNetwork.jsx";
import DevDesign from "./components/DevDesign.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
      setDarkMode(!darkMode)
    }
    return (

      <div className={`${darkMode && "dark"}`}>
          <div className='w-screen h-screen dark:bg-slate-900 '>
              <div className='max-w-6xl mx-auto flex justify-between px-3 py-6 items-center'>
                  <div className='flex space-x-10 text-xl text-[#ccc] font-semibold'>
                      <Link to='#about-me' className='font-bold text-green-400 ransition-all duration-300 hover:text-green-400'>About Me</Link>
                      <Link to='#projects' className =' transition-all duration-300 hover:text-green-400'>Projects</Link>
                      <Link to='#skills' className ='hover:text-green-400 transition-all duration-300'>Skills</Link>
                  </div>
                  <button className='shadow-xl bg-neutral-900 transition-all duration-200 hover:bg-neutral-800 hover:scale-110 flex self-center rounded-full cursor-pointer
                   ' onClick={toggleDarkMode}>
                      <span className='text-xl text-white font-bold text-center p-1 dark:text-neutral-800 dark:bg-white rounded-full'>MC</span>
                  </button>
                  <div className='text-lg flex rounded hover: self-center justify-self-center bg-green-500 hover:bg-green-500/90 transition-all duration-300 text-white font-bold '>
                      <button className='px-4 py-3 font-bold'>Get In Touch</button>
                  </div>
              </div>

              <div className='mt-10 mb-16 max-w-5xl mx-auto flex justify-between items-center ' id='about-me'>
                  <AboutMe/>
              </div>

              <div className='dark:bg-slate-900 -mt-10'>
                  <SocialNetwork/>
              </div>
              <div className='dark:bg-slate-900 pt-20'>
                <DevDesign/>
              </div>
              <div className='dark:bg-slate-900 w-screen pt-24' id='projects'>
                <Projects/>
              </div>
              <div className='dark:bg-slate-900 w-screen pt-24' id='skills'>
                  <Skills/>
              </div>

              <div className='dark:bg-slate-900 w-screen pb-20' id='contact'>
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
