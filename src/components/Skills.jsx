import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar"
import { SkillBar } from "react-skills"
const Skills = () => {

  return(
      <div className='max-w-6xl mx-auto px-3 flex flex-col justify-center mt-6'>
          <div className='flex flex-col'>
              <span className="w-0.5 rotate-90 h-10  left-6 relative bg-gray-700"></span>
              <h2 className='text-neutral-800 md:text-3xl text-2xl font-extrabold dark:text-white pb-5'>Skills</h2>
              <div className='flex md:flex-row flex-col gap-10 px-10 tracking-wide leading-relaxed items-center'>
                  <cite className='md:w-7/12 text-gray-800 md:text-xl sm:text-lg dark:text-gray-500'> {" Easy is not a option..  No days off..  Never Quit.. Be Fearless.. Talent you have Naturally.. Skill is only developed by hours and hours of Work . "}</cite>
                  <span className='font-bold  sm:text-lg md:text-xl dark:text-white'>- Usain BOLT</span>
              </div>
          </div>
          <div className='flex sm:flex-row flex-col justify-center sm:-mt-64 mt-20 items-center md:gap-10 gap-20 px-3'>
              <div className='sm:w-3/6 w-full '>
                  <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
                  <h2 className='text-xl font-bold dark:text-white'>- Main Skills</h2>
                  <div className='mt-10 sm:w-72 md:w-96 grid grid-cols-2 grid-rows-2 gap-16'>
                      <CircularProgressbarWithChildren
                          value={65}
                           styles={buildStyles({
                               pathColor: "#56DC95",
                               trailColor: "#717372",
                               strokeLinecap: "butt"
                           })}>
                          <div className='font-semibold  md:text-xl pb-2 text-[#208FB2] '>
                              REACT
                          </div>
                          <div className='font-semibold  dark:text-white'>
                              65%
                          </div>
                      </CircularProgressbarWithChildren>
                      <CircularProgressbarWithChildren
                          value={50}
                          styles={buildStyles({
                              pathColor: "#56DC95",
                              trailColor: "#717372",
                              strokeLinecap: "butt"
                          })}>
                          <div className='font-semibold md:text-xl pb-2 text-[#208FB2] '>
                              NodeJs
                          </div>
                          <div className='font-semibold dark:text-white'>
                              50%
                          </div>
                      </CircularProgressbarWithChildren>
                      <CircularProgressbarWithChildren
                          value={55}
                          styles={buildStyles({
                              pathColor: "#56DC95",
                              trailColor: "#717372",
                              strokeLinecap: "butt"
                          })}>
                          <div className='font-semibold md:text-xl pb-2 text-[#208FB2] '>
                              Express
                          </div>
                          <div className='font-semibold dark:text-white '>
                              55%
                          </div>
                      </CircularProgressbarWithChildren>
                      <CircularProgressbarWithChildren
                          value={60}
                          styles={buildStyles({
                              pathColor: "#56DC95",
                              trailColor: "#717372",
                              strokeLinecap: "butt"
                          })}>
                          <div className='font-semibold md:text-xl pb-2 text-[#208FB2] '>
                              MongoDB
                          </div>
                          <div className='font-semibold dark:text-white'>
                              60%
                          </div>
                      </CircularProgressbarWithChildren>
                  </div>
              </div>
              <div className='h-[53rem] md:w-3/6 w-full sm:mt-[25rem]'>
                  <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
                  <h2 className='text-xl font-bold dark:text-white'>- Mixed Skills</h2>
                  <div className='mt-10 flex flex-col gap-5'>
                      <SkillBar name="JavaScript" level={65} color="#56DC95" />
                      <SkillBar name="PHP" level={55} color="#56DC95" />
                      <SkillBar name="SpringBoot" level={40} color="#56DC95" />
                      <SkillBar name="Mysql" level={55} color="#56DC95" />
                      <SkillBar name="MongoDB" level={50} color="#56DC95" />
                      <SkillBar name="Supabase" level={60} color="#56DC95" />
                      <SkillBar name="Firebase" level={50} color="#56DC95" />
                      <SkillBar name="Figma" level={60} color="#56DC95" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Skills