"use client"
import Image from "next/image";
import React from "react";
import {motion, Variants} from "framer-motion";
import CarouselWrapper from "@/components/common/carousel-wrapper";

const cardVariants: Variants = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "keyframes",
            duration: 0.8
        }
    }
};
const latestSliderContent = [
    {
        image:"/latest/latest-1.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-2.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-3.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-4.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-5.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-6.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-7.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-8.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    },
    {
        image:"/latest/latest-9.png",
        type: "Opinion",
        title:"Writing is branding's secret weapon",
        description:"Why we put words at the heart of our work."
    }
]
function LatestInfoSlider() {
    return(
        <>
            <motion.section initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }} variants={cardVariants} className='w-full h-full'>
                <h2 className={`heading-h1 w-full !font-light text-white text-center mb-[-100px] md:mb-0 md:pb-14`}>LATEST</h2>

            </motion.section>
            <motion.section initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }} variants={cardVariants} className='w-full h-full'>
                <CarouselWrapper height="1000px">
                    {latestSliderContent.map(el => (
                        <article key={el.image}>
                            <div className='min-h-[50vh] h-full min-w-full relative overflow-hidden mb-7'>
                                <Image
                                    src={el.image}
                                    alt={el.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    objectFit='contain'
                                    quality={100}
                                    className='cursor-pointer transition-all duration-700 hover:scale-110'
                                />
                            </div>
                            <h6 className='heading-h6 !font-light uppercase pb-2.5 text-white text-center'>{el.type}</h6>
                            <h4 className='heading-h4 !font-light uppercase pb-3 text-white text-center'>{el.title}</h4>
                            <h4 className='heading-p !font-light text-white text-center'>{el.description}</h4>
                        </article>
                    ))}
                </CarouselWrapper>

            </motion.section>

        </>
    )
}
export default LatestInfoSlider
