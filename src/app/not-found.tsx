import Link from "next/link";
import { accentFont } from "@/lib/fonts";

function NotFound() {
    return(
        <main className='h-[calc(100svh-68px)] max-[1000px]:h-[calc(100svh-64px)] max-[600px]:h-[calc(100svh-56px)] flex flex-col items-center justify-center font-semibold'>
            <h1 className={`${accentFont.className} text-secondary-500 text-9xl max-[400px]:text-8xl`}>404</h1>

            <div className='flex flex-col items-center justify-center gap-5 max-[400px]:gap-4'>
                <p className='text-secondary-400 text-xl max-[400px]:text-lg tracking-wide'>Sorry<span>!</span> There is nothing here...</p>
                
                <Link href="/" className='text-primary-50 tracking-wide text-base max-[400px]:text-sm bg-accent-500 hover:bg-accent-600 py-2 px-10 max-[400px]:px-8 rounded-lg outline-none focus-visible:outline-secondary-500 transition-all ease-in-out duration-200 transform active:scale-90'>Home</Link>
            </div>
        </main>
    )
}

export default NotFound;