import { accentFont } from "@/lib/fonts";
import SocialLinks from "@/components/feature/social-links";

function HomePage() {
    return (
        <>
            <section className="flex justify-center items-center h-[calc(100svh-64px)] max-[1000px]:h-[calc(100svh-60px)]">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3 max-[1000px]:gap-2">
                        <p className="text-secondary-700 tracking-wide text-4xl max-[1000px]:text-3xl max-[800px]:text-2xl max-[625px]:text-22">Hi I&apos;m</p>

                        <div className="grow h-1 max-[800px]:h-[0.2rem] max-[625px]:h-[0.125rem] bg-accent-500"></div>
                    </div>

                    <h1 className={`${accentFont.className} text-14xl max-[1000px]:text-12xl max-[800px]:text-10xl max-[625px]:text-9xl max-[550px]:text-[88px] tracking-normal leading-[115px] max-[1000px]:leading-[95px] max-[800px]:leading-[75px] max-[625px]:leading-[75px] max-[550px]:leading-[50px] text-secondary-500`}>Umar Saeed</h1>

                    <h2 className="text-[54px] max-[1000px]:text-[46px] max-[800px]:text-4xl max-[625px]:text-3xl max-[550px]:text-2xl tracking-normal mt-5 max-[1000px]:mt-4 max-[800px]:mt-6 max-[550px]:-mt-2 text-accent-500 self-end">Next.Js Developer</h2>
                </div>
            </section>

            <SocialLinks />
        </>
    );
}

export default HomePage;
