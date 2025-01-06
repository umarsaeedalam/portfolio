import type { Metadata } from 'next'
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaClipboardCheck } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";

export const metadata: Metadata = {
    title: 'Experience',
}

function ExperiencePage() {
    return (
        <section className="flex items-center justify-center mt-10 max-[1000px]:mt-9 max-[600px]:mt-8 max-[450px]:mt-7 pb-28 max-[1000px]:pb-24 max-[600px]:pb-20 max-[450px]:pb-16">
            <div className="max-w-6xl max-[675px]:max-w-96 px-10 max-[1000px]:px-8">
                <div className="relative">
                    <h1 className="text-accent-500 text-7xl max-[1000px]:text-6xl max-[675px]:text-5xl tracking-tight text-center mb-10 max-[1000px]:mb-8 max-[675px]:mb-6">My Timeline</h1>

                    <div className="absolute left-1/2 max-[675px]:left-0 transform -translate-x-1/2 h-[92%] max-[675px]:h-[96%] w-[0.25px] bg-primary-500"></div>
                    
                    <div className="relative pt-8 max-[675px]:pt-0 flex flex-col gap-12 max-[1000px]:gap-10 max-[675px]:gap-8">
                        {/* Senior Scope Writer */}
                        <div className="flex max-[675px]:hidden">
                            <div className="w-1/2 pr-11 max-[1000px]:pr-9 text-right flex flex-col gap-0">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 font-semibold">Senior Scope Writer</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19">Feb 2024 - Oct 2024</p>
                            </div>
                            
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent-500 p-[10px] rounded-full">
                                <GiOpenBook className="text-2xl max-[1000px]:text-23"/>
                            </div>
                            
                            <div className="w-1/2 pl-11 max-[1000px]:pl-9 flex flex-col gap-1">
                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 font-semibold">Intersys</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19">
                                    Led both scope writing and quality assurance teams, overseeing project quality while managing client relationships for 
                                    complex writing projects. Balanced leadership responsibilities across multiple departments while maintaining high standards in outline 
                                    creation and team management.
                                </p>
                            </div>
                        </div>

                        {/* Mobile - Senior Scope Writer */}
                        <div className="relative flex min-[676px]:hidden">
                            <div className="absolute left-1/2 max-[675px]:left-0 transform -translate-x-1/2 bg-accent-500 p-[10px] max-[676px]:p-[9px] rounded-full">
                                <GiOpenBook className="text-2xl max-[1000px]:text-23 max-[676px]:text-21"/>
                            </div>
                            
                            <div className="w-1/2 pl-9 flex flex-col gap-1 grow">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 max-[676px]:text-22 font-semibold">Senior Scope Writer</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg">Feb 2024 - Oct 2024</p>

                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg font-semibold mt-2">Intersys</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19 max-[676px]:text-lg">
                                    Led both scope writing and quality assurance teams, overseeing project quality while managing client relationships for 
                                    complex writing projects. Balanced leadership responsibilities across multiple departments while maintaining high standards in outline 
                                    creation and team management.
                                </p>
                            </div>
                        </div>
                
                        {/* Associate Scope Writer */}
                        <div className="flex max-[675px]:hidden">
                            <div className="w-1/2 pr-11 max-[1000px]:pr-9 text-right flex flex-col gap-0">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 font-semibold">Associate Scope Writer</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19">Oct 2023 - Feb 2024</p>
                            </div>
                            
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent-500 p-[10px] rounded-full">
                                <GiOpenBook className="text-2xl max-[1000px]:text-23"/>
                            </div>
                            
                            <div className="w-1/2 pl-11 max-[1000px]:pl-9 flex flex-col gap-1">
                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 font-semibold">Intersys</h3>

                                <p className="text-secondary-500 text-xl max-[1000p x]:text-19">
                                    Crafted detailed book outlines and creative frameworks for client projects while simultaneously managing quality assurance 
                                    responsibilities. Developed comprehensive project roadmaps that served as foundational blueprints for the writing team, ensuring 
                                    alignment between client expectations and final deliverables.
                                </p>
                            </div>
                        </div>

                        {/* Mobile - Associate Scope Writer */}
                        <div className="relative flex min-[676px]:hidden">
                            <div className="absolute left-1/2 max-[675px]:left-0 transform -translate-x-1/2 bg-accent-500 p-[10px] max-[676px]:p-[9px] rounded-full">
                                <GiOpenBook className="text-2xl max-[1000px]:text-23 max-[676px]:text-21"/>
                            </div>
                            
                            <div className="w-1/2 pl-9 flex flex-col gap-1 grow">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 max-[676px]:text-22 font-semibold">Associate Scope Writer</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg">Oct 2023 - Feb 2024</p>

                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg font-semibold mt-2">Intersys</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19 max-[676px]:text-lg">
                                    Crafted detailed book outlines and creative frameworks for client projects while simultaneously managing quality assurance 
                                    responsibilities. Developed comprehensive project roadmaps that served as foundational blueprints for the writing team, ensuring 
                                    alignment between client expectations and final deliverables.
                                </p>
                            </div>
                        </div>
                
                        {/* Quality Assurance Associate */}
                        <div className="flex max-[675px]:hidden">
                            <div className="w-1/2 pr-11 max-[1000px]:pr-9 text-right flex flex-col gap-0">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 font-semibold">Quality Assurance Associate</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19">Sep 2022 - Oct 2023</p>
                            </div>
                            
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent-500 p-[10px] rounded-full">
                                <FaClipboardCheck className="text-2xl max-[1000px]:text-23"/>
                            </div>
                            
                            <div className="w-1/2 pl-11 max-[1000px]:pl-9 flex flex-col gap-1">
                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 font-semibold">Intersys</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19">
                                    Conducted comprehensive analysis of client call recordings to ensure service quality and compliance. Performed cross-departmental 
                                    quality checks across various production teams, identifying potential improvements and maintaining high standards in the 
                                    ghost-writing process.
                                </p>
                            </div>
                        </div>

                        {/* Mobile - Quality Assurance Associate */}
                        <div className="relative flex min-[676px]:hidden">
                            <div className="absolute left-1/2 max-[675px]:left-0 transform -translate-x-1/2 bg-accent-500 p-[10px] max-[676px]:p-[9px] rounded-full">
                                <FaClipboardCheck className="text-2xl max-[1000px]:text-23 max-[676px]:text-21"/>
                            </div>
                            
                            <div className="w-1/2 pl-9 flex flex-col gap-1 grow">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 max-[676px]:text-22 font-semibold">Quality Assurance Associate</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg">Oct 2023 - Feb 2024</p>

                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg font-semibold mt-2">Intersys</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19 max-[676px]:text-lg">
                                    Conducted comprehensive analysis of client call recordings to ensure service quality and compliance. Performed cross-departmental 
                                    quality checks across various production teams, identifying potential improvements and maintaining high standards in the 
                                    ghost-writing process.
                                </p>
                            </div>
                        </div>

                        {/* Senior Client Service Associate */}
                        <div className="flex max-[675px]:hidden">
                            <div className="w-1/2 pr-11 max-[1000px]:pr-9 text-right flex flex-col gap-1">
                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 font-semibold">HomeEasy Brokerage</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19">
                                    Led and mentored a team of client service associates while maintaining direct client relationships. 
                                    Streamlined communication processes and maintained high service standards across the team, contributing to 
                                    improved client satisfaction and faster response times.
                                </p>
                            </div>
                            
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent-500 p-[10px] rounded-full">
                                <RiCustomerService2Fill className="text-2xl max-[1000px]:text-23" />
                            </div>
                            
                            <div className="w-1/2 pl-11 max-[1000px]:pl-9 flex flex-col gap-0">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 font-semibold">Team Lead</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19">Jan 2022 - June 2022</p>
                            </div>
                        </div>

                        {/* Mobile - Senior Client Service Associate */}
                        <div className="relative flex min-[676px]:hidden">
                            <div className="absolute left-1/2 max-[675px]:left-0 transform -translate-x-1/2 bg-accent-500 p-[10px] max-[676px]:p-[9px] rounded-full">
                                <RiCustomerService2Fill className="text-2xl max-[1000px]:text-23 max-[676px]:text-21"/>
                            </div>
                            
                            <div className="w-1/2 pl-9 flex flex-col gap-1 grow">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 max-[676px]:text-22 font-semibold">Team Lead</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg">Jan 2022 - June 2022</p>

                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg font-semibold mt-2">HomeEasy Brokerage</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19 max-[676px]:text-lg">
                                    Led and mentored a team of client service associates while maintaining direct client relationships. 
                                    Streamlined communication processes and maintained high service standards across the team, contributing to 
                                    improved client satisfaction and faster response times.
                                </p>
                            </div>
                        </div>

                        {/* Client Service Associate */}
                        <div className="flex max-[675px]:hidden">
                            <div className="w-1/2 pr-11 max-[1000px]:pr-9 text-right flex flex-col gap-1">
                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 font-semibold">HomeEasy Brokerage</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19">
                                    Served as the initial point of contact for prospective clients, gathering and analyzing their housing requirements 
                                    to provide tailored property recommendations. Maintained exceptional response rates while handling client communications 
                                    entirely through digital channels, ensuring a smooth transition to the finalizing team.
                                </p>
                            </div>
                            
                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent-500 p-[10px] rounded-full">
                                <RiCustomerService2Fill className="text-2xl max-[1000px]:text-23" />
                            </div>
                            
                            <div className="w-1/2 pl-11 max-[1000px]:pl-9 flex flex-col gap-0">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 font-semibold">Client Service Associate</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19">Sep 2021 - Jan 2022</p>
                            </div>
                        </div>

                        {/* Mobile - Client Service Associate */}
                        <div className="relative flex min-[676px]:hidden">
                            <div className="absolute left-1/2 max-[675px]:left-0 transform -translate-x-1/2 bg-accent-500 p-[10px] max-[676px]:p-[9px] rounded-full">
                                <RiCustomerService2Fill className="text-2xl max-[1000px]:text-23 max-[676px]:text-21"/>
                            </div>
                            
                            <div className="w-1/2 pl-9 flex flex-col gap-1 grow">
                                <h3 className="text-accent-500 text-2xl max-[1000px]:text-23 max-[676px]:text-22 font-semibold">Client Service Associate</h3>

                                <p className="text-primary-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg">Sep 2021 - Jan 2022</p>

                                <h3 className="text-accent-300 text-xl max-[1000px]:text-19 max-[676px]:text-lg font-semibold mt-2">HomeEasy Brokerage</h3>

                                <p className="text-secondary-500 text-xl max-[1000px]:text-19 max-[676px]:text-lg">
                                    Served as the initial point of contact for prospective clients, gathering and analyzing their housing requirements 
                                    to provide tailored property recommendations. Maintained exceptional response rates while handling client communications 
                                    entirely through digital channels, ensuring a smooth transition to the finalizing team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperiencePage;