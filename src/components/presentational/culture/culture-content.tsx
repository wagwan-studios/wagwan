"use client"

import {motion, Variants} from "framer-motion";
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
function CultureContent() {
    return(
        <motion.section initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }} variants={cardVariants} className='lg:px-[200px] 2xl:px-[400px] px-mobile-container pt-28 flex flex-col items-center'>
            <p className='heading-h4 !font-light text-white text-center pb-5 md:pb-14 md:text-[36px]'>
                Ours is an open minded, collaborative, ideas driven studio.
                Where world-class creative comes without creative prima
                donnas. And where there’s as much commitment to personal
                well-being as to career development.
            </p >
            <p className='heading-h4 !font-light text-white text-center pb-5 md:text-[36px]'>
                If your talent comes without ego, if you play well with others,
                and if you’re ready to make us better,
            </p>
            <p className='heading-h4 !font-light text-white text-center border-b-2 border-white w-fit md:text-[36px]'>
                joinus@wagwanstudios.com
            </p>
        </motion.section>
    )
}

export default CultureContent
