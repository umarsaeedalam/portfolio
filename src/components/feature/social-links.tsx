import { motion } from "motion/react";
import { useMediaQuery } from '@react-hook/media-query'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SocialLinks() {
    const isMobile = useMediaQuery("(max-width: 500px)");

    const linkVariants = {
        hidden: {
            opacity: 0,
            x: isMobile ? 0 : -70,
            y: isMobile ? 70 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                delay: 2.6,
                duration: 0.6
            }
        }
    }
    return (
        <motion.div variants={linkVariants} initial='hidden' animate='visible' className="fixed w-full bottom-10 max-[1000px]:bottom-8 max-[650px]:bottom-6 max-[500px]:bottom-5 flex justify-center items-center z-50">
            <div className="max-w-[1700px] w-full px-10 max-[1000px]:px-8 max-[650px]:px-6 flex flex-col max-[500px]:flex-row items-start max-[500px]:justify-center gap-4 max-[1000px]:gap-3 max-[650px]:gap-[10px] max-[500px]:gap-5 text-secondary-500">
                <a href="https://github.com/umarsaeedalam" target="_blank" rel="noopener noreferrer" className="outline-none focus-visible:outline-accent-500" >
                    <button className="transition-all duration-300 ease-in-out active:scale-95">
                        <FaGithub className="text-3xl max-[1000px]:text-[28px] max-[650px]:text-[26px] hover:text-secondary-700 transition-all duration-300 ease-in-out" />
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/umarsaeedalam/" target="_blank" rel="noopener noreferrer" className="outline-none focus-visible:outline-accent-500" >
                    <button className="transition-all duration-300 ease-in-out active:scale-95">
                        <FaLinkedin className="text-3xl max-[1000px]:text-[28px] max-[650px]:text-[26px] hover:text-[#0A66C2] transition-all duration-300 ease-in-out" />
                    </button>
                </a>

                <a href="mailto:umarsaeedalam@outlook.com" className="outline-none focus-visible:outline-accent-500" >
                    <button className="transition-all duration-300 ease-in-out active:scale-95">
                        <MdEmail className="text-3xl max-[1000px]:text-[28px] max-[650px]:text-[26px] hover:text-[#EA4335] transition-all duration-300 ease-in-out" />
                    </button>
                </a>
            </div>
        </motion.div>
    )
}

export default SocialLinks;