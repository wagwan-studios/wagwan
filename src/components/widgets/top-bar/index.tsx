"use client"

import React, {useEffect} from 'react'
import Menu from "@/components/widgets/top-bar/menu";
import MainMenu from "@/components/widgets/top-bar/main-menu";
import {useRouter} from "next/navigation";
import {useCycle} from "framer-motion";
import {Karla} from 'next/font/google'

const karla = Karla({ subsets: ['latin'] })

function TopBar() {
    const [isOpen,setIsOpen] = useCycle(false,true)
    const router = useRouter()
    useEffect(()=>{
        isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
    },[isOpen])

    function handleMenuInteraction() {
        if (isOpen){
            setIsOpen()
        }
        router.push("/")
    }
    return(
        <>
            <section className="w-full absolute z-50 px-mobile-container pt-[15px] flex justify-between items-center md:pt-10 md:px-container ">
                {/*<Image src={"/logo.png"} alt={"Wagwan"} width={40} height={40} className="md:w-20 md:h-20 cursor-pointer" onClick={handleMenuInteraction}/>*/}
                <button type='button' onClick={handleMenuInteraction} className='w-14 md:w-20 h-14 md:h-20 p-2.5 md:p-5 rounded-full bg-[#E6F86C] flex justify-center items-center'>
                    <div>
                        <h2 className={`${karla.className} font-light text-sm md:text-[22px] text-[#8F81CD] scale-y-[3] mr-[-3px] inline-block`}>W</h2>
                        <h2 className={`${karla.className} font-light text-sm md:text-[22px] text-[#8F81CD] scale-y-[3] inline-block`}>W</h2>
                    </div>
                </button>
                <Menu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </section>
            <MainMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}
export default TopBar
