import github from "../assets/Github.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/X.svg"
import cursor from '../assets/scroll.svg'
import {HashLink as Link} from "react-router-hash-link";

const SocialNetwork = () => {
  return(

      <div className='relative px-1  max-w-6xl h-72 mx-auto overflow-hidden grid grid-rows-1 grid-cols-3'>
          <div className="flex flex-col gap-4 " >
              <Link to='https://github.com/MahomedCissokho' target="_blank" rel="noopener noreferrer" >
                  <img src={github} alt='github' className='md:w-10 md:h-10 w-7 h-7 cursor-pointer hover:scale-110 ease-in-out transition-all duration-300'/>
              </Link>
              <Link to='https://www.linkedin.com/in/mahomed-cissokho-70347723a/' target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt='linkedin' className='md:w-10 md:h-10 w-7 h-7 cursor-pointer hover:scale-110 ease-in-out transition-all duration-300'/>
              </Link>
              <Link to='https://twitter.com/from_Nasa_City' target="_blank" rel="noopener noreferrer" >
                  <img src={twitter} alt='X' className='md:w-10 md:h-10 w-7 h-7 cursor-pointer underline underline-offset-4 hover:scale-110 ease-in-out transition-all duration-300'/>
              </Link>

              <span className='md:ml-4 ml-3 w-0.5 h-24 bg-gray-500'></span>
          </div>
          <div className=' text-lg flex items-center  justify-center'>
            <img src={cursor} alt='cursor' className='w-12 h-12 hover:scale-110 transition-all duration-200 hover:cursor-pointer'/>
            <span className='dark:text-gray-500 pb-3 sm:text-lg text-sm'>Scroll Down To Discover</span>

          </div>
          <div className='  rotate-90  sm:pr-0 pl-14 pr-3  '>
            <span className='text-gray-500 md:text-xl text-lg font-semibold'>mahomedcissokho@esp.sn</span>
          </div>
      </div>
  )
}

export default SocialNetwork