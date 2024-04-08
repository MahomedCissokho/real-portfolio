import {HashLink as Link} from "react-router-hash-link";
import github from "../assets/Github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/X.svg";

const Footer = () => {
  return(
      <div className='dark:bg-slate-800/40'>
          <div className='flex flex-col text-sm sm:flex-row md:text-lg sm:items-center  px-28 py-7 gap-5 text-white sm:justify-between'>
              <h2 className='md:text-2xl text-lg text-green-400 font-extrabold'>
                  Portfolio.
              </h2>
              <div className=' flex flex-col justify-center gap-2 md:space-x-10 md:text-xl text-lg text-[#ccc] font-semibold'>
                  <Link to='#about-me' className='md:px-10 transition-all duration-300 hover:text-green-400'>About Me</Link>
                  <Link to='#projects' className =' transition-all duration-300 hover:text-green-400'>Projects</Link>
                  <Link to='#skills' className ='hover:text-green-400 transition-all duration-300'>Skills</Link>
                  <Link to='#contact' className ='hover:text-green-400 transition-all duration-300'>Contact</Link>
              </div>
              <div className="flex flex-col gap-4 " >
                  <Link to='https://github.com/MahomedCissokho' target="_blank" rel="noopener noreferrer" className="hover:scale-110 ease-in-out transition-all duration-300">
                      <img src={github} alt='github' className='md:w-10 md:h-10 w-7 h-7 cursor-pointer'/>
                  </Link>
                  <Link to='https://www.linkedin.com/in/mahomed-cissokho-70347723a/' target="_blank" rel="noopener noreferrer" className="hover:scale-110 ease-in transition-all duration-300">
                      <img src={linkedin} alt='linkedin' className='md:w-10 md:h-10 w-7 h-7cursor-pointer'/>
                  </Link>
                  <Link to='https://twitter.com/from_Nasa_City' target="_blank" rel="noopener noreferrer" className="hover:scale-110 ease-out transition-all duration-300">
                      <img src={twitter} alt='X' className='md:w-10 md:h-10 w-7 h-7 cursor-pointer underline underline-offset-4'/>
                  </Link>
              </div>

          </div>
          <div className='h-8 flex flex-row items-center justify-center gap-2 pb-3 '>
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></path>
                      <path d="M13.5 9.17a3 3 0 1 0 0 5.659"></path>
                  </g>
              </svg>
              <span className=' text-gray-500 font-extrabold text-lg'>copyright { new Date().getFullYear()}. All Rights Reserved</span>
          </div>
      </div>
  )

}

export default Footer