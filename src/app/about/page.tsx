import TransitionAnimation from "@/components/common/transition-animation";
import AboutHero from "@/components/presentational/about-hero";
import AboutUsContent from "@/components/presentational/about-us-content";
import Image from "next/image";
import ServiceSection from "@/components/presentational/service-section";

function About() {
    return <TransitionAnimation>
        <AboutHero/>
        <AboutUsContent/>
        <div className='w-full h-[250px]  relative mb-16 sm:h-[350px] md:h-[800px] md:mb-[400px]'>
            <Image src={"/office-image.png"} alt={"Office"} fill objectFit="cover"/>
        </div>
        <ServiceSection/>
        <div className='h-[100px] relative z-10 md:h-[300px] xl:h-[500px]'/>
    </TransitionAnimation>
}

export default About
