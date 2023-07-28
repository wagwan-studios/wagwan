"use client"

import Image from "next/image";
import React from "react";
import {motion,Variants} from "framer-motion";

const latestList = [
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

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
function LatestInfoList() {
    return(
        <section className='pt-[120px] pb-20 px-mobile-container lg:pt-[300px] lg:pb-[260px] lg:px-container'>
            {/*<div>*/}
            {/*    <h4>FILTERS</h4>*/}
            {/*    <div>*/}
            {/*        <button type="button">*/}
            {/*            */}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className='flex flex-col gap-[50px] w-full md:gap-[180px]'>
                {latestList.map(el =>(
                    <motion.article key={el.image}  initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}>
                        <motion.div className='min-h-[50vh] h-full min-w-full relative overflow-hidden mb-7' variants={cardVariants}>
                            <Image
                                src={el.image}
                                alt={el.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                objectFit='contain'
                                quality={100}
                                className='cursor-pointer transition-all duration-700 hover:scale-110'
                            />
                        </motion.div>
                        <h6 className='heading-h6 !font-light uppercase pb-2.5 text-white text-center'>{el.type}</h6>
                        <h4 className='heading-h4 !font-light uppercase pb-3 text-white text-center'>{el.title}</h4>
                        <h4 className='heading-p !font-light text-white text-center'>{el.description}</h4>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}

export default LatestInfoList
