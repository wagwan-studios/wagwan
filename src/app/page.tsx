
import Hero from "@/components/presentational/hero";
import ContentSection from "@/components/presentational/content-section";
import TransitionAnimation from "@/components/common/transition-animation";
import LatestInfoSlider from "@/app/latest-info-slider";
import React from "react";
import ContentParallax from "@/components/presentational/content-parallax";

export default function Home() {

    return (
    <TransitionAnimation>
        <Hero/>
        <ContentSection/>
        <ContentParallax/>
        <LatestInfoSlider/>
        <div className='h-[100px] md:h-[300px] xl:h-[500px]'/>
    </TransitionAnimation>
  )
}
