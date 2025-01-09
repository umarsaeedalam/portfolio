'use client'

import { accentFont } from "@/lib/fonts";

type Props = {
    error: Error & { digest?: string }
    reset: () => void
}

function Error({ error, reset }: Props) {
    return(
        <main className='h-[calc(100svh-68px)] max-[1000px]:h-[calc(100svh-64px)] max-[600px]:h-[calc(100svh-56px)] flex flex-col items-center justify-center font-semibold'>
            <h1 className={`${accentFont.className} text-secondary-500 text-9xl max-[400px]:text-8xl`}>Error</h1>

            <div className='flex flex-col items-center justify-center gap-5 max-[400px]:gap-4'>
                <p className='text-secondary-400 text-xl max-[400px]:text-lg tracking-wide'>{error.message}</p>
                
                <button onClick={reset} className='text-primary-50 tracking-wide text-base max-[400px]:text-sm bg-accent-600 hover:bg-accent-700 py-2 px-10 max-[400px]:px-8 rounded-lg outline-none focus-visible:outline-secondary-500 transition-all ease-in-out duration-200 transform active:scale-90'>Try again</button>
            </div>
        </main>
    )
}

export default Error;