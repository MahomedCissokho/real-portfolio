/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = ({darkMode, toggleDarkMode}) => {
    const location = useLocation();
    const { hash } = location;

    
    const isCurrent = (path) => {
        return hash.includes(path);
    };
    
    
    useEffect(() => {
        if (!hash) {
            window.location.hash = '#about-me';
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className={`w-screen border shadow-sm bg-gray-400/5 ${darkMode && "dark border-gray-800"}`}>

            <div className='flex items-center justify-between max-w-6xl px-3 py-6 mx-auto'>
                <div className='flex space-x-10 text-xl text-[#ccc] font-semibold'>
                    <Link to='#about-me' className={`font-bold ${isCurrent('#about-me') ? 'text-green-400' : ''}  transition-all duration-300 hover:text-green-400`}>
                        About Me
                    </Link>
                    <Link to='#projects' className={`transition-all duration-300 ${isCurrent('#projects') ? 'text-green-400' : ''} hover:text-green-400`}>
                        Projects
                    </Link>
                    <Link to='#skills' className={`hover:text-green-400 transition-all duration-300 ${isCurrent('#skills') ? 'text-green-400' : ''}`}>
                        Skills
                    </Link>
                </div>
                <div className='flex self-center transition-all duration-200 rounded-full shadow-xl cursor-pointer bg-neutral-900 hover:bg-neutral-800 hover:scale-110 '>
                    <span className='p-1 text-xl font-bold text-center text-white rounded-full dark:text-neutral-800 dark:bg-white' onClick={toggleDarkMode}>MC</span>
                </div>
                <div className='flex self-center text-lg font-bold text-white transition-all duration-300 bg-green-500 rounded justify-self-center hover:bg-green-500/90 '>
                    <Link className='px-4 py-3 font-bold' to="https://www.esp.sn">
                        Get In Touch
                    </Link>
                </div>
        </div>
        </div>
    );
};

export default Header;
