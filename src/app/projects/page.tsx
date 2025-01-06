import Image from "next/image";
import type { Metadata } from 'next'
import audiscribeLogo from "../../../public/audiscribe-logo.png"
import cashflowdojoLogo from "../../../public/cashflowdojo-logo.png"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
    title: 'Projects',
}

function ProjectsPage() {
    return (
        <section className="flex items-center justify-center mt-10 max-[1000px]:mt-9 max-[600px]:mt-8 pb-28 max-[1000px]:pb-24 max-[600px]:pb-20 max-[450px]:pb-16">
            <div className="max-w-6xl w-full px-10 max-[1000px]:px-8 max-[600px]:px-6 max-[450px]:px-5">
                <h1 className="text-accent-500 text-7xl max-[1000px]:text-6xl max-[600px]:text-5xl tracking-tight text-center">My Work</h1>

                <div className="mt-10 max-[1000px]:mt-8 max-[600px]:mt-7 max-[450px]:mt-6">
                    <div className="pb-8 max-[1000px]:pb-[30px] max-[600px]:pb-7 border-b-[1px] flex flex-col gap-5 max-[1000px]:gap-[18px] max-[600px]:gap-4">
                        <div className="flex items-center gap-3 max-[1000px]:gap-[11px] max-[600px]:gap-[10px]">
                            <div className="w-12 max-[1000px]:w-11 max-[600px]:w-10">
                                <a href='https://audiscribe.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <Image src={audiscribeLogo} alt="Website Logo" className="rounded-xl" />
                                </a>
                            </div>

                            <a href='https://audiscribe.vercel.app' target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 font-bold text-3xl max-[1000px]:text-[28px] max-[600px]:text-[26px] transition-all ease-in-out duration-300">Audiscribe</a>
                        </div>
                        
                        <p className="text-secondary-500 tracking-wide text-xl max-[1000px]:text-19 max-[600px]:text-lg">
                            A transcription service website that leverages AssemblyAI&apos;s API to provide premium features for free. 
                            Includes word-level navigation with audio sync, flexible playback speed controls, and Word document export capabilities. 
                            Built to make advanced transcription features accessible without subscription barriers.
                        </p>

                        <div className="flex gap-1 tracking-wide flex-wrap">
                            <Badge className="bg-[#333333] text-base max-[450px]:text-15 rounded-xl hover:bg-[#333333]">nextjs</Badge>

                            <Badge className="bg-[#3178C6] text-base max-[450px]:text-15 rounded-xl hover:bg-[#3178C6]">typesript</Badge>

                            <Badge className="bg-[#38BDF8] text-base max-[450px]:text-15 rounded-xl hover:bg-[#38BDF8]">tailwind</Badge>

                            <Badge className="bg-[#805AD5] text-base max-[450px]:text-15 rounded-xl hover:bg-[#805AD5]">assemblyai</Badge>

                            <Badge className="bg-[#000000] text-base max-[450px]:text-15 rounded-xl hover:bg-[#000000]">vercel</Badge>
                        </div>
                    </div>

                    <div className="py-8 max-[1000px]:py-[30px] max-[600px]:pb-7 border-b-[1px] flex flex-col gap-5 max-[1000px]:gap-[18px] max-[600px]:gap-4">
                        <div className="flex items-center gap-3 max-[1000px]:gap-[11px] max-[600px]:gap-[10px]">
                            <div className="w-12 max-[1000px]:w-11 max-[600px]:w-10">
                                <a href='https://cashflowdojo.vercel.app' target="_blank" rel="noopener noreferrer">
                                    <Image src={cashflowdojoLogo} alt="Website Logo" className="rounded-xl" />
                                </a>
                            </div>

                            <a href='https://cashflowdojo.vercel.app' target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:text-accent-600 font-bold text-3xl max-[1000px]:text-[28px] max-[600px]:text-[26px] transition-all ease-in-out duration-300">Cashflow Dojo</a>
                        </div>
                        
                        <p className="text-secondary-500 tracking-wide text-xl max-[1000px]:text-19 max-[600px]:text-lg ">
                            A full-stack expense management application offering multi-currency support and comprehensive analytics. 
                            Built with secure OAuth integration (Google/GitHub), the app features interactive data visualizations, advanced filtering systems, 
                            and preset categorization options. 
                        </p>

                        <div className="flex gap-1 tracking-wide flex-wrap">
                            <Badge className="bg-[#333333] text-base max-[450px]:text-15 rounded-xl hover:bg-[#333333]">nextjs</Badge>

                            <Badge className="bg-[#3178C6] text-base max-[450px]:text-15 rounded-xl hover:bg-[#3178C6]">typesript</Badge>

                            <Badge className="bg-[#38BDF8] text-base max-[450px]:text-15 rounded-xl hover:bg-[#38BDF8]">tailwind</Badge>

                            <Badge className="bg-[#F29111] text-base max-[450px]:text-15 rounded-xl hover:bg-[#F29111]">mysql</Badge>

                            <Badge className="bg-[#00DC82] text-base max-[450px]:text-15 rounded-xl hover:bg-[#00DC82]">authjs</Badge>

                            <Badge className="bg-[#000000] text-base max-[450px]:text-15 rounded-xl hover:bg-[#000000]">vercel</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage;