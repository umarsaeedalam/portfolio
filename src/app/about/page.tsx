import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
}

function AboutPage() {
    return (
        <section className="flex justify-center items-center mt-12 max-[1000px]:mt-11 max-[600px]:mt-10 max-[450px]:mt-9 pb-28 max-[1000px]:pb-24 max-[600px]:pb-20 max-[450px]:pb-16">
            <div className="max-w-6xl text-xl max-[1000px]:text-19 max-[600px]:text-lg max-[450px]:text-17 px-10 max-[1000px]:px-8 max-[600px]:px-6 max-[450px]:px-5">
                <h1 className="text-accent-500 font-bold text-6xl max-[1000px]:text-5xl max-[600px]:text-4xl text-center">My Story</h1>

                <div className="tracking-wide flex flex-col gap-10 max-[1000px]:gap-8 max-[600px]:gap-6 max-[450px]:gap-5 mt-10 max-[1000px]:mt-9 max-[600px]:mt-8">
                    <p>
                        How do I begin summarizing myself within a paragraph or two? Hmm, I&apos;m not sure where to start, there&apos;s so much to say and 
                        simply too much to fit in the word count. So, let&apos;s instead focus on something more specific, something that my 
                        expected reader would be interested in.
                        Take 1 - I&apos;m a frontend developer who turns coffee into code and complex problems into elegant solutions, all while writing clean, 
                        maintainable code. Ah, that sounds like everyone else and a bot. To keep it real and simple: I love to build things, and coding allows me 
                        to build meaningful and useful solutions. That&apos;s why I genuinely enjoy what I do.
                    </p>

                    <p>
                        Now, here comes the part where I&apos;m supposed to list out my soft skills such as my incredible leadership skills, 
                        remarkable creativity, and exceptional responsibility. But let&apos;s be honest - isn&apos;t that what everyone claims to have? 
                        Instead, let me share some of my actual experiences that shaped these abilities. My professional career began as a remote client 
                        service associate, where I maintained the fastest customer response rate in the team (wasn’t exacting a stiff competition to be 
                        fair) without anyone constantly watching over my shoulder. Soon I earned my first promotion to team lead - not managing hundreds, 
                        but enough to learn something about leadership.Then came my role as a quality assurance associate at a ghostwriting company, where 
                        two promotions in two years told an interesting story. I moved from QA to becoming a scope writer, then quickly advanced to senior 
                        scope writer, all while managing the QA team I once belonged to. Each role taught me something different: adaptability, 
                        creative problem-solving, and the art of juggling responsibilities without dropping the ball on quality.
                    </p>

                    <p>
                        On to the tech stack section, where I&apos;m supposed to overwhelm you with the never-ending list of tools, technologies, 
                        programming languages and frameworks. Yup, let&apos;s skip that resume-style listing. My expertise lies in Next.js and React, along with its 
                        entire ecosystem. Some tools in this ecosystem I&apos;ve already used, others I&apos;ll learn as needs arise. 
                        I don’t think the length of my tech stack list matters all that much, but my ability to build practical, efficient solutions 
                        that genuinely serve a purpose.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;