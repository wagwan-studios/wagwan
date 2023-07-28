"use client"

import React from 'react'
import {Cycle,motion} from "framer-motion";

interface Props {
    isOpen:boolean
    setIsOpen:  Cycle
}
const Path = (props:any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={props.isOpen ? "hsl(0, 0%, 18%)" : "hsl(100, 100%, 100%)"}
        strokeLinecap="round"
        {...props}
    />
);
function Menu({isOpen,setIsOpen}:Props) {
    return(
        <motion.div initial={false} animate={isOpen ? "open" : "closed"}>
            <button type="button" onClick={() => setIsOpen()}>
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                        isOpen={isOpen}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                        isOpen={isOpen}
                    />
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                        isOpen={isOpen}
                    />
                </svg>
            </button>
            {/*{!isOpen && <HiOutlineMenuAlt3 className="text-primary-color text-2xl cursor-pointer md:text-4xl" onClick={handleMenuInteraction}/>}*/}
            {/*{isOpen && <AiOutlineClose className="text-2xl cursor-pointer md:text-4xl" onClick={handleMenuInteraction}/>}*/}
        </motion.div>
    )
}
export default Menu
