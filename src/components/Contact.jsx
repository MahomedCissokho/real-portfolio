import {Link} from "react-router-dom";

const Contact = () => {
  return(

      <div className='max-w-6xl  text-sm px-3 mx-auto sm:-mt-56 -mt-80 flex flex-col gap-10 justify-center items-center'>
        <p className='tracking-wide dark:text-white leading-relaxed md:text-xl text-[15px] sm:text-lg'>
            I am always seeking innovative and challenging projects and dynamic teams that will allow me to acquire new skills and knowledge, while evolving in an exciting environment. I am open to any opportunity that can help me thrive professionally and make a meaningful contribution to stimulating projects.
        </p>
        <Link className='bg-green-600 font-bold text-white md:text-xl text-lg text-center  hover:bg-green-600/90 px-8 transition-all duration-300 py-4 rounded'  to="mailto:mahomedcissokho@esp.sn" >
            Say Hi
        </Link>
      </div>
  )
}

export default Contact