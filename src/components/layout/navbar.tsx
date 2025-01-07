'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./mobile-navbar";

function NavBar() {
    const pathname = usePathname()

    return (
        <nav className="text-secondary-500 tracking-wide text-lg max-[1000px]:text-17 max-[600px]:text-base font-bold flex justify-center items-center">
            <ul className="flex max-w-[1700px] w-full gap-10 max-[1000px]:gap-7 max-[600px]:gap-4 items-center pt-6 max-[1000px]:pt-5 max-[600px]:pt-4 max-[450px]:pt-3 px-10 max-[1000px]:px-8 max-[600px]:px-6 max-[450px]:px-5">
                <li className="max-[450px]:hidden rounded-xl">
                    <Link href="/" className={`${(pathname === '/') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Home</Link>
                </li>

                <li className="max-[450px]:hidden">
                    <Link href="/about" className={`${(pathname === '/about') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>About</Link>
                </li>

                <li className="max-[450px]:hidden">
                    <Link href="/experience" className={`${(pathname === '/experience') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Experience</Link>
                </li>

                <li className="max-[450px]:hidden">
                    <Link href="/projects" className={`${(pathname === '/projects') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-300 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Projects</Link>
                </li>

                <li className="min-[451px]:hidden">
                    <MobileNavbar />
                </li>
                 
                <li className="ml-auto">
                    <a href="/Resume - Umar Saeed.pdf" download className="outline-none">
                        <button className="text-lg max-[1000px]:text-19 max-[600px]:text-lg max-[450px]:text-17 font-bold tracking-wide bg-accent-500 hover:bg-accent-600 py-[6px] max-[600px]:py-1 px-4 max-[600px]:px-[14px] rounded-xl outline-none focus-visible:outline-secondary-500 transition-all duration-300 ease-in-out hover:cursor-pointer active:scale-95">Resume</button>
                    </a>
                </li>  
            </ul>
        </nav>
    )
}

export default NavBar;