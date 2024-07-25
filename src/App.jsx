import { useEffect, useState } from "react";
import Skills from "./components/Skills.jsx";
import AboutMe from "./components/AboutMe.jsx";
import SocialNetwork from "./components/SocialNetwork.jsx";
import DevDesign from "./components/DevDesign.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header.jsx";
import { motion } from "framer-motion";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [loading, setLoading] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const triggerAnimation = () => {
            setLoading(false);
        };
        setTimeout(triggerAnimation, 3000);
    }, []);

    return loading ? <Loader /> : (
        <div className={`${darkMode && "dark"}`}>
            <div className='w-screen h-screen dark:bg-slate-900'>
                <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

                <div className='w-screen h-screen dark:bg-slate-900' id='about-me'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <AboutMe />
                    </motion.div>
                </div>

                <div className='-mt-10 dark:bg-slate-900'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <SocialNetwork />
                    </motion.div>
                </div>

                <div className='pt-20 dark:bg-slate-900'>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <DevDesign />
                    </motion.div>
                </div>

                <div className='w-screen pt-24 dark:bg-slate-900' id='projects'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Projects />
                    </motion.div>
                </div>

                <div className='w-screen pt-24 dark:bg-slate-900' id='skills'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Skills />
                    </motion.div>
                </div>

                <div className='w-screen pb-20 dark:bg-slate-900' id='contact'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Contact />
                    </motion.div>
                </div>

                <div className='dark:bg-slate-900 bg-[#263238]'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
