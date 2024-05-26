/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


import { useState } from "react";

const Header = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const { hash } = location;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isCurrent = (path) => {
        console.log(hash, path)
        return hash.includes(path);
    };

    useEffect(() => {
        if (!hash) {
            window.location.hash = "#about-me";
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`w-screen border shadow-sm bg-gray-400/5 ${darkMode && "dark border-gray-800"}`}>
            <div className="flex items-center justify-between max-w-6xl px-3 py-6 mx-auto">
                <div className="sm:flex space-x-10 text-xl text-[#ccc] font-semibold hidden">
                    <Link
                        to="#about-me"
                        className={`font-bold ${isCurrent("#about-me") ? "text-green-400" : ""} transition-all duration-300 hover:text-green-400 max-sm:text-lg`}
                    >
                        About Me
                    </Link>
                    <Link
                        to="#projects"
                        className={`transition-all duration-300 ${isCurrent("#projects") ? "text-green-400" : ""} hover:text-green-400 max-sm:text-lg`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="#skills"
                        className={`hover:text-green-400 transition-all duration-300 ${isCurrent("#skills") ? "text-green-400" : ""} max-sm:text-lg`}
                    >
                        Skills
                    </Link>
                </div>
                <div className="flex self-center transition-all duration-200 rounded-full shadow-xl cursor-pointer bg-neutral-900 hover:bg-neutral-800 hover:scale-110">
                    <span className="p-1 text-xl font-bold text-center text-white rounded-full dark:text-neutral-800 dark:bg-white" onClick={toggleDarkMode}>
                        MC
                    </span>
                </div>
                <div className="self-center hidden text-lg font-bold text-white transition-all duration-300 bg-green-500 rounded sm:flex justify-self-center hover:bg-green-500/90 ">
                    <Link className="px-4 py-3 font-bold max-sm:text-lg" to="https://www.esp.sn">
                        Get In Touch
                    </Link>
                </div>
                <div className="flex self-center mr-2 text-lg font-bold text-white transition-all duration-300 bg-green-500 rounded justify-self-center hover:bg-green-500/90 sm:hidden">
                    <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col px-3 py-6 mx-auto space-y-4 sm:hidden">
                    <Link
                        to="#about-me"
                        className={`font-bold  text-gray-400/60 ${isCurrent("#about-me") ? "text-green-400" : ""} transition-all duration-300 hover:text-green-400 max-sm:text-lg`}
                    >
                        About Me
                    </Link>
                    <Link
                        to="#projects"
                        className={`text-gray-400/60 font-bold transition-all duration-300 ${isCurrent("#projects") ? "text-green-400" : ""} hover:text-green-400 max-sm:text-lg`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="#skills"
                        className={`text-gray-400/60 font-bold hover:text-green-400 transition-all duration-300 ${isCurrent("#skills") ? "text-green-400" : ""} max-sm:text-lg`}
                    >
                        Skills
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;