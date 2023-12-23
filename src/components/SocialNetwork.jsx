import github from "../assets/Github.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/X.svg"
import cursor from '../assets/scroll.svg'
import {HashLink as Link} from "react-router-hash-link";

const SocialNetwork = () => {
  return(

      <div className='px-1 max-w-6xl h-72 mx-auto overflow-hidden flex justify-between'>
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

              <span className='ml-4 w-0.5 h-24 bg-gray-500'></span>
          </div>
          <div className='text-lg flex flex-row items-center justify-center'>
            <img src={cursor} alt='cursor' className='w-12 h-12 hover:scale-110 transition-all duration-200 hover:cursor-pointer'/>
            <span className='dark:text-gray-500 pb-3'>Scroll Down To Discover</span>

          </div>
          <div className=' text-lg rotate-90 md:pr-3'>
            <span className='text-gray-500 text-xl font-semibold'>mahomedcissokho@esp.sn</span>
          </div>
      </div>
  )
}

export default SocialNetwork