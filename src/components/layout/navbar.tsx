'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./mobile-navbar";
import { motion } from "motion/react";

const navVariants = {
    hidden: {
        opacity: 0,
        y: -70
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 2.6
        }
    }
}

function NavBar() {
    const pathname = usePathname()

    return (
        <motion.nav variants={navVariants} initial={pathname === '/' && 'hidden'} animate={pathname === '/' && 'visible'} className="text-secondary-500 tracking-wider text-lg max-[1000px]:text-17 max-[600px]:text-base font-bold flex justify-center items-center">
            <ul className="flex max-w-[1700px] w-full gap-10 max-[1000px]:gap-7 max-[600px]:gap-4 items-center pt-6 max-[1000px]:pt-5 max-[600px]:pt-4 max-[450px]:pt-3 px-10 max-[1000px]:px-8 max-[600px]:px-6 max-[450px]:px-5">
                <li className="relative max-[450px]:hidden rounded-xl">
                    <Link href="/" className={`${(pathname === '/') ? 'text-accent-500 focus-visible:outline-secondary-500' : 'hover:text-accent-300 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Home</Link>
                
                    {pathname === '/' && <motion.div layoutId='nav' className="absolute inset-0 border-b-1 border-accent-500" />}
                </li>

                <li className="relative max-[450px]:hidden">
                    <Link href="/about" className={`${(pathname === '/about') ? 'text-accent-500 focus-visible:outline-secondary-500' : 'hover:text-accent-300 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>About</Link>
                
                    {pathname === '/about' && <motion.div layoutId='nav' className="absolute inset-0 border-b-1 border-accent-500" />}
                </li>

                <li className="relative max-[450px]:hidden">
                    <Link href="/experience" className={`${(pathname === '/experience') ? 'text-accent-500 focus-visible:outline-secondary-500' : 'hover:text-accent-300 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Experience</Link>
                
                    {pathname === '/experience' && <motion.div layoutId='nav' className="absolute inset-0 border-b-1 border-accent-500" />}
                </li>

                <li className="relative max-[450px]:hidden">
                    <Link href="/projects" className={`${(pathname === '/projects') ? 'text-accent-500 focus-visible:outline-secondary-500' : 'hover:text-accent-300 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Projects</Link>
                
                    {pathname === '/projects' && <motion.div layoutId='nav' className="absolute inset-0 border-b-1 border-accent-500" />}
                </li>

                <li className="min-[451px]:hidden">
                    <MobileNavbar />
                </li>
                 
                <li className="ml-auto">
                    <a href="/Resume - Umar Saeed.pdf" download className="outline-none">
                        <button className="text-lg max-[1000px]:text-17 max-[600px]:text-base font-bold bg-accent-500 hover:bg-accent-600 py-2 px-6 max-[1000px]:px-5 max-[600px]:px-4 rounded-xl outline-none focus-visible:outline-secondary-500 transition-all duration-300 ease-in-out hover:cursor-pointer active:scale-95">Resume</button>
                    </a>
                </li>  
            </ul>
        </motion.nav>
    )
}

export default NavBar;