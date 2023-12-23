import {HashLink as Link} from "react-router-hash-link";
import CV from '../assets/mc_cv.pdf'
const Header = () => {
  return(
      <div className='max-w-6xl mx-auto flex justify-between px-3 py-6 items-center'>
          <div className='flex space-x-10 text-xl text-[#ccc] font-semibold'>
              <Link to='#about-me' className='font-bold text-green-400 ransition-all duration-300 hover:text-green-400'>About Me</Link>
              <Link to='#projects' className =' transition-all duration-300 hover:text-green-400'>Projects</Link>
              <Link to='#skills' className ='hover:text-green-400 transition-all duration-300'>Skills</Link>
          </div>
          <div className='shadow-xl bg-neutral-900 transition-all duration-200 hover:bg-neutral-800 hover:scale-110 flex self-center rounded-full cursor-pointer '>
              <span className='text-xl text-white font-bold text-center p-1 dark:text-neutral-800 dark:bg-white rounded-full'>MC</span>
          </div>
          <div className='text-lg flex rounded hover: self-center justify-self-center bg-green-500 hover:bg-green-500/90 transition-all duration-300 text-white font-bold '>
                  <a
                      href={CV}
                      download="Curriculum Vitae"
                      target="_blank"
                      rel="noreferrer"
                  >
                      <button className='px-4 py-3 font-bold'>
                        Get In Touch
                      </button>

                  </a>
          </div>
      </div>
  )
}

export default Header