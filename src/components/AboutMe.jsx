import profile from '../assets/image.jpeg'

const AboutMe = () => {
  return(
      <div className='mt-20 max-w-5xl mx-auto flex justify-between items-center '>
          <div className='tracking-wide leading-relaxed flex flex-col w-3/6 items-center justify-around  gap-7'>
            <div className='text-8xl px-3 dark:text-white overflow-y-hidden'>
                My name is <span className='text-blue-700 font-bold'>Ciisco.</span>
            </div>
            <span className="text-xl w-10/12 md:mr-10 mr-6 dark:text-white">
                I’m  a passionate UX/UI designer and Software Engineer based in SENEGAL .
            </span>
            <div className="flex w-full ml-10 ">
                <button className="text-white bg-green-500 w-32 hover:bg-green-500/90 transition-all duration-200 text-center rounded px-3 py-4 font-bold text-xl ">
                    Hire Me
                </button>
            </div>

          </div>
          <div className='w-96 h-96 bg-teal-50 rounded-full shadow-2xl'>
              <div className='rounded-full w-[23rem] h-[23rem] p-3 overflow-y-hidden'>
                  <img src={profile} alt='profile' className='bg-cover bg-center bg-no-repeat' />
              </div>
          </div>
      </div>
  )
}

export default AboutMe