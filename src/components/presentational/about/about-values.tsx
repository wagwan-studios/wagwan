"use client"

import {motion, Variants} from "framer-motion";

interface Props {
    title:string,
    description:string
}
const cardVariants: Variants = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            type: "keyframes",
            duration: 0.8
        }
    }
};

function AboutValues({title,description}:Props) {
    return(
        <motion.div initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }} variants={cardVariants}>
            <h2 className='heading-h2 !font-light text-white text-center pb-5 uppercase md:pb-20'>{title}</h2>
            <p className='heading-h6 !font-light text-white text-center'>{description}</p>
        </motion.div>
    )
}
export default AboutValues
