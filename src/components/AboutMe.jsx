import profile from '../assets/image.jpeg'
import {Link} from "react-router-dom";

const AboutMe = () => {
  return(
      <div className='flex items-center justify-between max-w-5xl mx-auto mt-20 '>
          <div className='flex flex-col items-center justify-around w-3/6 leading-relaxed tracking-wide gap-7'>
            <div className='px-3 overflow-y-hidden text-4xl md:text-8xl sm:text-7xl dark:text-white'>
                My name is <span className='font-bold text-blue-700'>Ciisco.</span>
            </div>
            <span className="w-10/12 pl-3 mr-6 text-sm md:text-xl sm:pl-0 sm:text-lg md:mr-10 dark:text-white">
                I’m  a passionate UX/UI designer and Software Engineer based in SENEGAL .
            </span>
            <div className="flex w-full ml-10 ">
                <Link className="w-32 px-3 py-4 text-lg font-bold text-center text-white transition-all duration-200 bg-green-500 rounded hover:bg-green-500/90 md:text-xl "
                to='mailto:mahomedcissokho@esp.sn'>
                    Hire Me
                </Link>
            </div>
          </div>
          <div className='rounded-full shadow-2xl md:w-96 md:h-96 bg-teal-50 dark:bg-slate-900'>
              <div className='rounded-full md:w-[23rem] md:h-[23rem] sm:w-[18rem] sm:h-[18rem] w-[15rem] h-[15rem] p-3 overflow-y-hidden'>
                  <img src={profile} alt='profile' className='bg-center bg-no-repeat bg-cover' />
              </div>
          </div>
      </div>
  )
}

export default AboutMe