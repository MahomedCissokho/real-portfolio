import {HashLink as Link} from "react-router-hash-link";
import github from "../assets/Github.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/X.svg";
import copyright from "../assets/copyright.png";

const Footer = () => {
  return(
      <div className='dark:bg-slate-800/40'>
          <div className=' flex items-center px-28 py-7 justify-between text-white '>
              <h2 className='text-2xl text-green-400 font-extrabold'>
                  Portfolio.
              </h2>
              <div className='flex flex-col justify-center gap-2 space-x-10 text-xl text-[#ccc] font-semibold'>
                  <Link to='#about-me' className='px-10 transition-all duration-300 hover:text-green-400'>About Me</Link>
                  <Link to='#projects' className =' transition-all duration-300 hover:text-green-400'>Projects</Link>
                  <Link to='#skills' className ='hover:text-green-400 transition-all duration-300'>Skills</Link>
                  <Link to='#contact' className ='hover:text-green-400 transition-all duration-300'>Contact</Link>
              </div>
              <div className="flex flex-col gap-4 " >
                  <Link to='https://github.com/MahomedCissokho' target="_blank" rel="noopener noreferrer">
                      <img src={github} alt='github' className='w-10 h-10 cursor-pointer'/>
                  </Link>
                  <Link to='https://www.linkedin.com/in/mahomed-cissokho-70347723a/' target="_blank" rel="noopener noreferrer">
                      <img src={linkedin} alt='linkedin' className='w-10 h-10 cursor-pointer'/>
                  </Link>
                  <Link to='https://twitter.com/from_Nasa_City' target="_blank" rel="noopener noreferrer">
                      <img src={twitter} alt='X' className='w-10 h-10 cursor-pointer underline underline-offset-4'/>
                  </Link>

              </div>

          </div>
          <div className='h-8 flex flex-row items-center justify-center gap-2 pb-3 '>
              <img src={copyright} alt="copyright" className="w-8 h-8"/>
              <span className=' text-gray-500 font-extrabold text-lg'>copyright 2023. All Right Reserved</span>
          </div>
      </div>
  )

}

export default Footer