const Skills = () => {
  return(
      <div className='max-w-6xl mx-auto mt-28 px-3'>
          <div className='flex flex-col gap-4'>
              <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
              <h2 className='text-neutral-800 text-3xl font-extrabold'>Skills</h2>
              <div className='flex flex-row gap-10 px-10 tracking-wide leading-relaxed items-center'>
                  <cite className='w-7/12 text-gray-800 text-xl'> {" Easy is not a option..  No days off..  Never Quit.. Be Fearless.. Talent you have Naturally.. Skill is only developed by hours and hours of Work . "}</cite>
                  <span className='font-bold text-xl'>- Usain BOLT</span>
              </div>
          </div>

          <div className='flex mt-14 flex-row items-center px-3'>
              <div>
                  <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
                  <h2 className='text-xl font-bold'>- Main Skills</h2>
                  <div className=''>
                      <div className="flex self-center justify-self-center w-32 h-32 rounded-full bg-[#717372]">

                      </div>
                  </div>
              </div>
              <div className='space-x-[35rem]'>
                  <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
                  <h2 className='text-xl font-bold'>- Mixed Skills</h2>
                  <div className='bg-rose-500'>
                      <div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Skills