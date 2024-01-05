import profile from '../assets/image.jpeg'
import {Link} from "react-router-dom";

const AboutMe = () => {
  return(
      <div className='mt-20 max-w-5xl mx-auto flex justify-between items-center '>
          <div className='tracking-wide leading-relaxed flex flex-col w-3/6 items-center justify-around  gap-7'>
            <div className='md:text-8xl sm:text-7xl text-4xl px-3 dark:text-white overflow-y-hidden'>
                My name is <span className='text-blue-700 font-bold'>Ciisco.</span>
            </div>
            <span className="md:text-xl pl-3 sm:pl-0 sm:text-lg text-sm  w-10/12 md:mr-10 mr-6 dark:text-white">
                I’m  a passionate UX/UI designer and Software Engineer based in SENEGAL .
            </span>
            <div className="flex w-full ml-10 ">
                <Link className="text-white bg-green-500 w-32 hover:bg-green-500/90 transition-all duration-200 text-center rounded px-3 py-4 font-bold md:text-xl text-lg "
                to='mailto:mahomedcissokho@esp.sn'>
                    Hire Me
                </Link>
            </div>
          </div>
          <div className='md:w-96 md:h-96 bg-teal-50 rounded-full shadow-2xl dark:bg-slate-900'>
              <div className='rounded-full md:w-[23rem] md:h-[23rem] sm:w-[18rem] sm:h-[18rem] w-[15rem] h-[15rem] p-3 overflow-y-hidden'>
                  <img src={profile} alt='profile' className='bg-cover bg-center bg-no-repeat' />
              </div>
          </div>
      </div>
  )
}

export default AboutMe