'use client'

import { accentFont } from "@/lib/fonts";
import SocialLinks from "@/components/feature/social-links";
import { motion } from "motion/react";
import NavBar from "@/components/layout/navbar";

const introVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8
        }
    }
}

const titleVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.8
        }
    }
}

const subtitleVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: 2.0
        }
    }
}

function HomePage() {
    return (
        <>
            <NavBar />
                    
            <section className="flex justify-center items-center h-[calc(100svh-68px)] max-[1000px]:h-[calc(100svh-64px)] max-[600px]:h-[calc(100svh-56px)]">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3 max-[1000px]:gap-2">
                        <motion.p variants={introVariants} initial='hidden' animate='visible' className="text-secondary-700 font-bold tracking-wide text-4xl max-[1000px]:text-3xl max-[850px]:text-2xl max-[650px]:text-22 max-[500px]:text-xl max-[400px]:text-lg">Hi I&apos;m</motion.p>

                        <motion.div variants={subtitleVariant} initial='hidden' animate='visible' className="grow h-1 max-[850px]:h-[0.2rem] max-[650px]:h-[0.125rem] bg-accent-500"></motion.div>
                    </div>

                    <motion.h1 variants={titleVariants} initial='hidden' animate='visible' className={`${accentFont.className} text-10xl max-[1000px]:text-9xl max-[850px]:text-8xl max-[650px]:text-7xl max-[500px]:text-6xl max-[400px]:text-[54px] tracking-normal max-[1000px]:leading-normal max-[850px]:leading-[135px] max-[650px]:leading-[95px] max-[500px]:leading-[70px] max-[400px]:leading-[58px] text-secondary-500`}>Umar Saeed</motion.h1>

                    <motion.h2 variants={subtitleVariant} initial='hidden' animate='visible' className="font-bold text-5xl max-[1000px]:text-4xl max-[850px]:text-3xl max-[650px]:text-2xl max-[500px]:text-xl max-[400px]:text-lg tracking-wide -mt-[65px] max-[1000px]:-mt-[60px] max-[850px]:-mt-[45px] max-[650px]:-mt-[35px] max-[500px]:-mt-[25px] max-[400px]:-mt-[26px] text-accent-500 self-end">Frontend Developer</motion.h2>
                </div>
            </section>

            <SocialLinks />
        </>
    );
}

export default HomePage;
