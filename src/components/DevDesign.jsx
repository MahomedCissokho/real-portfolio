import development from "../assets/Development.svg"
import design from "../assets/Design.svg"

const DevDesign =  () => {
  return(
      <div className='flex max-w-6xl mx-auto px-3 items-center overflow-y-hidden justify-between gap-8'>
          <div className='flex flex-col gap-10 w-4/6 ' >
              <span className="w-0.5 relative left-6 h-10 rotate-90  -mb-10 bg-gray-700"></span>
              <h2 className='dark:text-white sm:text-xl md:text-3xl font-bold text-lg '>Development</h2>
              <img src={development} alt="dev" className='w-4/6 h-4/6 bg-cover bg-center bg-no-repeat hover:scale-110 transition-all cursor-pointer duration-300 '/>
              <p className='text-gray-500 sm:text-lg text-sm md:text-2xl tracking-wide leading-relaxed'> I enjoy learning something new every day by designing systems, building scalable and intituve applications and solving problems.</p>
          </div>
          <div className='flex flex-col w-2/6 relative gap-5 top-[7rem] overflow-hidden md:top-[10rem]'>
              <span className="absolute w-0.5 rotate-90 h-10 -top-12 left-6 bg-gray-700"></span>
              <h2 className='dark:text-white text-lg sm:text-xl md:text-3xl font-bold '>Design</h2>
              <img src={design} alt="design" className="bg-cover bg-no-repeat hover:scale-110 transition-all cursor-pointer duration-300 w-full h-full bg-center"/>
          </div>
      </div>
  )
}

export default DevDesign