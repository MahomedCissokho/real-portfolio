import catalyst from '../assets/Project1.svg'
import space221 from '../assets/Project2.svg'
import dieulsima from '../assets/Project3.svg'

const Projects = () => {
  return(
      <div className='max-w-6xl mx-auto px-3 '>
          <div className='flex flex-col  '>
              <span className="w-0.5 rotate-90 h-12 relative left-6 bg-gray-700"></span>
              <div className='flex flex-row items-center justify-between'>
                  <h2 className=' text-xl md:text-2xl font-bold dark:text-white'>Latest Projects</h2>
                  <span className='text-xl md:text-2xl text-blue-700 font-semibold'>Apps</span>
              </div>
          </div>
          <div className=' mt-7 flex md:flex-row flex-col items-center justify-between gap-5  '>
              <div className='flex flex-col relative gap-5 '>
                  <img src={catalyst} alt='catalyst' className='cursor-pointer'/>
                  <div className='bg-neutral-900 absolute rounded'>
                      <span className='text-white px-3 py-4 text-center md:text-3xl text-2xl font-extrabold'>01</span>
                  </div>
                  <h3 className='text-neutral-800 text-xl md:text-2xl font-semibold dark:text-white'>Catalyst Shop</h3>
              </div>

              <div className='flex flex-col relative gap-5 mt-16 '>
                  <img src={space221} alt='space' className='cursor-pointer'/>
                  <div className='bg-neutral-900 absolute rounded'>
                      <span className='text-white px-3 py-4 text-center md:text-3xl text-2xl font-extrabold'>02</span>
                  </div>
                  <h3 className='text-neutral-800 text-xl md:text-2xl font-semibold dark:text-white'>Space 221</h3>
              </div>

              <div className='flex flex-col relative gap-5 mt-32 '>
                  <img src={dieulsima} alt='dieulsima' className='cursor-pointer'/>
                  <div className='bg-neutral-900 absolute rounded'>
                      <span className='text-white px-3 py-4 text-center md:text-3xl text-2xl  font-extrabold'>03</span>
                  </div>
                  <h3 className='text-neutral-800 text-xl md:text-2xl font-semibold dark:text-white'>Dieulsimaa</h3>
              </div>
          </div>
      </div>
  )
}

export default Projects