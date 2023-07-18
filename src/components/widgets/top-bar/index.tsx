"use client"

import React, {useEffect, useState} from 'react'
import Image from "next/image";
import Menu from "@/components/widgets/top-bar/menu";
import MainMenu from "@/components/widgets/top-bar/main-menu";
import {useRouter} from "next/navigation";
function TopBar() {
    const [isOpen,setIsOpen] = useState(false)
    const router = useRouter()
    useEffect(()=>{
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    },[isOpen])
    return(
        <>
            <section className="w-full absolute z-50 px-mobile-container pt-[15px] flex justify-between items-center md:pt-10 md:px-container ">
                <Image src={"/logo.png"} alt={"Wagwan"} width={40} height={40} className="md:w-20 md:h-20 cursor-pointer" onClick={() => router.push("/")}/>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </section>
            {isOpen && <MainMenu setIsOpen={setIsOpen}/>}
        </>
    )
}
export default TopBar
