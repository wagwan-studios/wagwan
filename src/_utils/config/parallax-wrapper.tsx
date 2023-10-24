"use client"

import React from "react";
import {Parallax} from "@react-spring/parallax";

interface Props {
 children:React.ReactNode
 pages:number
}

function ParallaxWrapper({children,pages}:Props) {
    return(
        <Parallax pages={pages}>
            {children}
        </Parallax>
    )

}
export default ParallaxWrapper
