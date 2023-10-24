"use client"

// @ts-ignore
import { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import React from "react";
import dynamic from "next/dynamic";

// @ts-ignore
const ReactCarousel : any = dynamic(() => import("react-carousel-animated"),{
    ssr:false
})
interface Props {
    children:React.ReactNode
    height:string
    width?: number
}

function CarouselWrapper({children,height,width=50}:Props) {
    return(
        <ReactCarousel
            carouselConfig={{
                transform: {
                    rotateY: {
                        [BEFORE]: () => "rotateY(25deg)",
                        [CENTER]: () => "rotateY(0deg)",
                        [AFTER]: () => "rotateY(-25deg)"
                    }
                }
            }}
            itemMaxWidth={width}
            carouselHeight={height}
        >
            {children}
        </ReactCarousel>
    )
}
export default CarouselWrapper
