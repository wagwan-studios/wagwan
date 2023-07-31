import TransitionAnimation from "@/components/common/transition-animation";
import CultureHero from "@/components/presentational/culture-hero";
import Image from "next/image";
import CultureContent from "@/components/presentational/culture-content";


function Culture() {
    return <TransitionAnimation>
        <CultureHero/>
        <div className='w-full h-[250px]  relative mb-16 sm:h-[350px] md:h-[800px] md:mb-[200px]'>
            <Image src={"/culture-image.png"} alt={"Office"} fill priority objectFit="cover"/>
        </div>
        <CultureContent/>
        <div className='h-[100px] md:h-[300px] xl:h-[500px]'/>
    </TransitionAnimation>

}
export default Culture
