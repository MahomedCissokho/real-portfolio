/* eslint-disable react/prop-types */
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import {  useState } from "react";
import { motion } from "framer-motion";
import resume from "../assets/Software_Engineer_Student_MahomedCISSOKHO_ResumeInEnglish.pdf";

const Header = ({ darkMode, toggleDarkMode }) => {
    const location = useLocation();
    const { hash } = location;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isCurrent = (path) => {
        return hash.includes(path);
    };

    return (
        <div className={`w-screen border shadow-sm bg-gray-400/5 ${darkMode && "dark border-gray-800"}`}>
            <div className="flex items-center justify-between max-w-6xl px-3 py-6 mx-auto">
                <motion.div
                    className="sm:flex space-x-10 text-xl text-[#ccc] font-semibold hidden"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
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
                </motion.div>
                <motion.div
                    className="flex self-center transition-all duration-200 rounded-full shadow-xl cursor-pointer bg-neutral-900 hover:bg-neutral-800 hover:scale-110"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span className="p-1 text-xl font-bold text-center text-white rounded-full dark:text-neutral-800 dark:bg-white" onClick={toggleDarkMode}>
                        MC
                    </span>
                </motion.div>
                <motion.div
                    className="self-center hidden text-lg font-bold text-white transition-all duration-300 bg-green-500 rounded sm:flex justify-self-center hover:bg-green-500/90"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a className="px-4 py-3 font-bold max-sm:text-lg" href={resume} target="_blank" rel="noreferrer">
                        Get In Touch
                    </a>
                </motion.div>
                <div className="flex self-center mr-2 text-lg font-bold text-white transition-all duration-300 bg-green-500 rounded justify-self-center hover:bg-green-500/90 sm:hidden">
                    <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    className="flex flex-col px-3 py-6 mx-auto space-y-4 sm:hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        to="#about-me"
                        className={`font-bold text-gray-400/60 ${isCurrent("#about-me") ? "text-green-400" : ""} transition-all duration-300 hover:text-green-400 max-sm:text-lg`}
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
                </motion.div>
            )}
        </div>
    );
};

export default Header;
