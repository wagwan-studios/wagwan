"use client"

import {motion} from "framer-motion";
import React from "react";

interface Props {
    children:React.ReactNode
}

function TransitionAnimation({children}:Props) {
    return(
        // <AnimatePresence
        //     mode="wait"
        //     initial={false}
        //     onExitComplete={() => window.scrollTo(0, 0)}
        // >
            <motion.main initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         exit={{ y: 20, opacity: 0 }}
                         transition={{
                             type: "spring",
                             stiffness: 260,
                             damping: 20,
                         }}>
                {children}
            </motion.main>
        // </AnimatePresence>
    )
}
export default TransitionAnimation
