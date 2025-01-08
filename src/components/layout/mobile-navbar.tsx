'use client'

import Link from "next/link";
import { Drawer, DrawerContent, useDisclosure } from "@nextui-org/react";
import { HiMenuAlt4 } from "react-icons/hi"; 
import { usePathname } from "next/navigation";

const styles = {
    base: 'bg-white backdrop-filter backdrop-blur-sm bg-opacity-75'
}

// const styles = {
//     base: 'bg-secondary-500'
// }

function MobileNavbar() {
    const pathname = usePathname()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <button onClick={onOpen} className="text-secondary-500 hover:text-accent-500 transition-all duration-300 ease-in-out hover:cursor-pointer active:scale-85">
                <HiMenuAlt4 className="text-[19px]" />
            </button>

            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="top" backdrop="transparent" hideCloseButton classNames={styles}>
                <DrawerContent>
                    {(onClose) => (
                        <nav className="text-secondary-900 font-bold text-lg tracking-wider py-4">
                            <ul className="flex flex-col items-center gap-4">
                                <li>
                                    <Link href="/" onClick={onClose} className={`${(pathname === '/') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-200 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Home</Link>
                                </li>
                
                                <li>
                                    <Link href="/about" onClick={onClose} className={`${(pathname === '/about') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-200 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>About</Link>
                                </li>
                
                                <li>
                                    <Link href="/experience" onClick={onClose} className={`${(pathname === '/experience') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-200 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Experience</Link>
                                </li>
                
                                <li>
                                    <Link href="/projects" onClick={onClose} className={`${(pathname === '/projects') ? 'text-accent-500 underline underline-offset-4 focus-visible:outline-secondary-500' : 'hover:text-accent-500 focus-visible:outline-accent-500 hover:underline-offset-4 transition-all duration-200 ease-in-out'} hover:cursor-pointer outline-none p-1 rounded-md`}>Projects</Link>
                                </li> 
                            </ul>
                        </nav>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default MobileNavbar;
  