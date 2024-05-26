import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar"
import { SkillBar } from "react-skills"
const Skills = () => {

  return(
      <div className='flex flex-col justify-center max-w-6xl px-3 mx-auto mt-6'>
          <div className='flex flex-col'>
              <span className="w-0.5 rotate-90 h-10  left-6 relative bg-gray-700"></span>
              <h2 className='pb-5 text-2xl font-extrabold text-neutral-800 md:text-3xl dark:text-white'>Skills</h2>
              <div className='flex flex-col items-center gap-10 px-10 leading-relaxed tracking-wide md:flex-row'>
                  <cite className='text-gray-800 md:w-7/12 md:text-xl sm:text-lg dark:text-gray-500'> {" Easy is not a option..  No days off..  Never Quit.. Be Fearless.. Talent you have Naturally.. Skill is only developed by hours and hours of Work . "}</cite>
                  <span className='font-bold sm:text-lg md:text-xl dark:text-white'>- Usain BOLT</span>
              </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-20 px-3 mt-20 sm:flex-row sm:-mt-64 md:gap-10'>
              <div className='w-full sm:w-3/6 '>
                  <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
                  <h2 className='text-xl font-bold dark:text-white'>- Main Skills</h2>
                  <div className='grid grid-cols-2 grid-rows-2 gap-16 mt-10 sm:w-72 md:w-96'>
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
                          <div className='font-semibold dark:text-white'>
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
                              Tailwind
                          </div>
                          <div className='font-semibold dark:text-white'>
                              80%
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
                              NodeJs
                          </div>
                          <div className='font-semibold dark:text-white '>
                              60%
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
                              Scripting
                          </div>
                          <div className='font-semibold dark:text-white'>
                              55%
                          </div>
                      </CircularProgressbarWithChildren>
                  </div>
              </div>
              <div className='h-[53rem] md:w-3/6 w-full sm:mt-[25rem]'>
                  <span className="w-0.5 rotate-90 h-20 -mb-8 bg-gray-700"></span>
                  <h2 className='text-xl font-bold dark:text-white'>- Mixed Skills</h2>
                  <div className='flex flex-col gap-5 mt-10'>
                      <SkillBar name="PHP" level={55} color="#56DC95" />
                      <SkillBar name="Mysql & Mongo" level={70} color="#56DC95" />
                      <SkillBar name="C, Java" level={70} color="#56DC95" />
                      <SkillBar name="Bash, Python" level={60} color="#56DC95" />
                      <SkillBar name="Express" level={60} color="#56DC95" />
                      <SkillBar name="Firebase" level={50} color="#56DC95" />
                      <SkillBar name="Figma" level={60} color="#56DC95" />
                      <SkillBar name="UML" level={60} color="#56DC95" />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Skills