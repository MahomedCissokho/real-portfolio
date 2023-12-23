import {Link} from "react-router-dom";

const Contact = () => {
  return(

      <div className='max-w-6xl px-3 mx-auto -mt-56 flex flex-col gap-10 justify-center items-center'>
        <p className='tracking-wide dark:text-white leading-relaxed text-xl'>
            I am always seeking innovative and challenging projects and dynamic teams that will allow me to acquire new skills and knowledge, while evolving in an exciting environment. I am open to any opportunity that can help me thrive professionally and make a meaningful contribution to stimulating projects.
        </p>
        <Link className='bg-green-600 font-bold text-white text-xl text-center  hover:bg-green-600/90 px-8 transition-all duration-300 py-4 rounded'  to="mailto:mahomedcissokho@esp.sn" >
            Say Hi
        </Link>
      </div>
  )
}

export default Contact