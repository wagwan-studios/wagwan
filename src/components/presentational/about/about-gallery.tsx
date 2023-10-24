"use client"

import Image from "next/image";
import CarouselWrapper from "@/components/common/carousel-wrapper";
import React from "react";

const galleryList = [
    {
        src:"/about/about-1.png"
    },
    {
        src:"/about/about-2.png"
    },
    {
        src:"/about/about-3.png"
    },
]

function AboutGallery() {
    return(
        <section>
            <CarouselWrapper height="500px" width={100}>
                {galleryList.map(el => (
                    <div key={el.src}  className='min-h-[500px] h-full min-w-full w-[250px] md:w-[500px] lg:w-[800px] relative overflow-hidden mb-7'>
                        <Image
                            src={el.src}
                            alt={"Image"}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            objectFit='cover'
                            quality={100}
                        />
                    </div>
                ))}
            </CarouselWrapper>
        </section>
    )
}
export default AboutGallery
