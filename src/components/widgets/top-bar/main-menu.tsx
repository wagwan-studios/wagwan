import Link from "next/link";
import React, {useState} from "react";
import {AnimatePresence, Cycle, motion} from "framer-motion"
import Image from "next/image";

interface Props {
    setIsOpen : Cycle
    isOpen:boolean
}
const menu = [
    {
        title:"ABOUT",
        link:"/about",
    },
    {
        title:"WORK",
        link:"/work",
    },
    {
        title:"CULTURE",
        link:"/culture",
    },
    {
        title:"LATEST",
        link:"/latest",
    },
    {
        title:"CONTACT",
        link:"/contact",
    },
]
function MainMenu({setIsOpen,isOpen} : Props) {
    const [isHovering,setIsHovering] = useState(-1)
    return(
        <>
            <AnimatePresence>
                {isOpen && <motion.section exit={{
                    width: 0,
                    transition: {duration: 0.3}
                }} initial={{width: 0}} animate={{width: "100%"}}
                                className='bg-tertiary-color w-full h-screen absolute z-10 flex items-center justify-center'>
                    <motion.ul exit={{
                        opacity:0
                    }} className="text-center">
                        {menu.map((el,i) => (
                            <motion.li className='flex items-center justify-center gap-2.5 ' key={el.title} onMouseEnter={() => setIsHovering(i)} onMouseLeave={()=>setIsHovering(-1)}>
                                <Image src={"/arrows/arrow-1.png"} alt={"Arrow 1"} width={40} height={20} className={`md:w-20 md:h-20 ${isHovering === i ? 'visible' : 'invisible'}`}/>
                                <Link href={el.link} className="heading-h1 font-light" onClick={() => setIsOpen()}>
                                    {el.title}
                                </Link>
                                <Image src={"/arrows/arrow-2.png"} alt={"Arrow 2"} width={40} height={20} className={`md:w-20 md:h-20 ${isHovering === i ? 'visible' : 'invisible'}`}/>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>}
            </AnimatePresence>
        </>
    )
}
export default MainMenu
