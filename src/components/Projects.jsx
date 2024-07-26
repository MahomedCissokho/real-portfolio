import { motion } from 'framer-motion';
import lms from '../assets/lms.png';
import food from '../assets/food.png';
import dieulsima from '../assets/carpooling.png';
import { FaGithub, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NasaCity LMS',
      image: lms,
      description: 'Learning Management System',
      techStack: [
        { name: 'React', icon: <FaReact /> },
        { name: 'NodeJs', icon: <FaNodeJs /> },
        { name: 'Express', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <FaDatabase /> },
      ],
      link: 'https://github.com/MahomedCissokho/real-portfolio',
      websiteURL: 'https://lmsnasacity.netlify.app/',
    },
    {
      id: 2,
      title: 'Recipe 221',
      image: food,
      description: 'Recipe and Diet App',
      techStack: [
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Node', icon: <FaNodeJs /> },
        { name: 'Express', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <FaDatabase /> },
      ],
      link: 'https://github.com/yourusername/space221',
    },
    {
      id: 3,
      title: 'Dieulsimaa',
      image: dieulsima,
      description: 'Carpooling Platform',
      techStack: [
        { name: 'React', icon: <FaReact /> },
        { name: 'NodeJs', icon: <FaNodeJs /> },
        { name: 'Express', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <FaDatabase /> },
      ],
      link: 'https://github.com/yourusername/dieulsima',
    },
  ];

  return (
    <div className='max-w-6xl px-3 mx-auto'>
      <div className='flex flex-col'>
        <span className="w-0.5 rotate-90 h-12 relative left-6 bg-gray-700"></span>
        <div className='flex flex-row items-center justify-between'>
          <h2 className='text-xl font-bold md:text-2xl dark:text-white'>Latest Projects</h2>
          <span className='text-xl font-semibold text-blue-700 md:text-2xl max-md:mr-20'>Apps</span>
        </div>
      </div>
      <div className='flex flex-col items-center justify-between gap-5 mt-7 md:flex-row'>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className='relative flex flex-col gap-5 p-5 rounded-md cursor-pointer hover:bg-[#0f172a]/50 hover:shadow-lg'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(project.websiteURL, '_blank')}
          >
            <img src={project.image} alt={project.title} className='object-cover bg-no-repeat rounded-lg cursor-pointer h-[18.5rem] ' />
            <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-5 transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100'>
              <p className='mt-2 text-xl font-semibold text-blue-700 '>{project.description}</p>
              <div className='flex gap-2 mt-2'>
                {project.techStack.map((tech, i) => (
                  <div key={i} className='flex items-center gap-1 text-white'>
                    {tech.icon}
                    <span className='text-sm'>{tech.name}</span>
                  </div>
                ))}
              </div>
              <a href={project.link} className='mt-2 text-blue-400' target='_blank' rel='noopener noreferrer'>
                <FaGithub size={40} />
              </a>
            </div>
            <div className='absolute flex items-center justify-between w-full px-2 top-2 left-2'>
              <span className='px-2 ml-1 text-2xl font-extrabold text-center text-white -translate-x-4 rounded translate-y-[14.5rem] md:text-3xl bg-neutral-900 '>{`0${index + 1}`}</span>
            </div>
            <h3 className='mt-2 text-2xl font-bold text-center text-white'>{project.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
