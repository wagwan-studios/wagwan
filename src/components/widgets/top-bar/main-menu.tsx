import Link from "next/link";
import React from "react";
import {AnimatePresence, Cycle, motion} from "framer-motion"

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
                        {menu.map(el => (
                            <motion.li key={el.title} whileHover={{scale: 1.1}}>
                                <Link href={el.link} className="heading-h1 font-light" onClick={() => setIsOpen()}>
                                    {el.title}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.section>}
            </AnimatePresence>
        </>
    )
}
export default MainMenu
