import { accentFont } from "@/lib/fonts";
import SocialLinks from "@/components/feature/social-links";

function HomePage() {
    return (
        <>
            <section className="flex justify-center items-center h-[calc(100svh-64px)] max-[1000px]:h-[calc(100svh-60px)]">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 max-[1000px]:gap-2">
                        <p className="text-secondary-700 tracking-wide text-4xl max-[1000px]:text-3xl max-[650px]:text-2xl max-[500px]:text-22">Hi I&apos;m</p>

                        <div className="grow h-1 max-[650px]:h-[0.2rem] max-[500px]:h-[0.125rem] bg-accent-500"></div>
                    </div>

                    <h1 className="text-13xl max-[1000px]:text-11xl max-[650px]:text-9xl max-[500px]:text-8xl tracking-tighter leading-[150px] max-[1000px]:leading-[130px] max-[650px]:leading-[90px] max-[500px]:leading-[60px] text-secondary-500">Umar Saeed</h1>

                    <h2 className={`${accentFont.className} text-5xl max-[1000px]:text-4xl max-[650px]:text-3xl max-[500px]:text-[27px] -mt-3 max-[1000px]:-mt-4 max-[650px]:-mt-2 max-[500px]:-mt-1 tracking-tight text-accent-500 self-end`}>Next.Js Developer</h2>
                </div>
            </section>

            <SocialLinks />
        </>
    );
}

export default HomePage;
