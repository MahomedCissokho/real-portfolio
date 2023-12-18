import development from "../assets/Development.svg"
import design from "../assets/Design.svg"

const DevDesign =  () => {
  return(
      <div className='flex max-w-6xl mx-auto px-3 mt-24 items-center overflow-y-hidden justify-between gap-8'>
          <div className='flex flex-col gap-5 w-4/6'>
              <span className="w-0.5 rotate-90 h-20 -mb-10 bg-gray-700"></span>
              <h2 className='text-3xl font-bold'>Development</h2>
              <img src={development} alt="dev" className='w-4/6 h-4/6 bg-cover bg-center bg-no-repeat'/>
              <p className='text-gray-500  text-2xl tracking-wide leading-relaxed'> I enjoy learning something new every day by designing systems, building scalable and intituve applications and solving problems.</p>
          </div>
          <div className='flex flex-col w-2/6 relative top-[7rem]'>
              <span className="w-0.5 rotate-90 h-20 -mb-6 bg-gray-700"></span>
              <h2 className='text-3xl font-bold'>Design</h2>
              <img src={design} alt="design" className="bg-cover bg-no-repeat bg-center"/>
          </div>
      </div>
  )
}

export default DevDesign