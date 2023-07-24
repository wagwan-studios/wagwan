"use client"

import {IParallax} from "@react-spring/parallax";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
// import {
//     useScroll,
//     motion,
//     useTransform,
//     useSpring, MotionValue
// } from "framer-motion";
import "./styles.css"
import {useInView} from "react-intersection-observer";

// function useParallax(value: MotionValue<number>, distance: number) {
//     return useTransform(value, [0, 1], [-distance, distance]);
// }
// function CustomImage({ id }: { id: number }) {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({ target: ref });
//     const y = useParallax(scrollYProgress, 300);
//
//     return (
//         <section className='section'>
//             <div ref={ref} className='min-h-[500px] min-w-full relative'>
//                 <Image
//                     src={"/content-images/image-1.png"}
//                     alt={'content image'}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     objectFit='contain'
//                     quality={100}
//                     className='img cursor-pointer transition-all duration-700	 hover:scale-110'
//                 />
//             </div>
//         </section>
//     );
// }

function ContentParallax() {
    // const alignCenter = { display: 'flex', alignItems: 'center' }
    const parallaxRef = useRef<IParallax>();
    // const { scrollYProgress } = useScroll();
    // const y1 = useTransform(scrollYProgress, [0, 500], [0, 0]);
    // const y2 = useTransform(scrollYProgress, [0, 500], [0, 0]);
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });
    const { ref } = useInView();
    const [triggerHeading,setTriggerHeader] = useState(false)
    // const [isFade,setIsFade] = useState(false)
    // const scrollListener = () => {
    //     const handleWheelEvent = () => {
    //         if (ref.current){
    //             const {container, current} = ref.current;
    //             const scrollpercent = current / (container.current.scrollHeight - window.innerHeight)
    //             console.log(scrollpercent);
    //         }
    //     };
    //     window.addEventListener('wheel', handleWheelEvent);
    //     return () => {
    //         window.removeEventListener('wheel', handleWheelEvent);
    //     };
    // };
    // useEffect(scrollListener, []);

    const onScroll = () =>
        parallaxRef.current ? parallaxRef.current.current / parallaxRef.current.space : 0

    useEffect(() => {
        if (!parallaxRef.current || !parallaxRef.current.container) return
        // @ts-ignore
        parallaxRef.current.container.onscroll = onScroll
    })

    // useEffect(()=>{
    //     setTriggerHeader(inView)
    // },[inView])

    useEffect(() => {
        const imagesContainer = document.getElementById("contentContainer")?.getBoundingClientRect()
        const headingRef = document.getElementById("heading")?.getBoundingClientRect()
        const contentContainer = document.getElementById('contentContainer')?.getBoundingClientRect()
        const contentParallaxWrapper = document.getElementById('contentParallaxWrapper')?.getBoundingClientRect()
        const onScroll = () => {
            if (imagesContainer && headingRef && contentContainer && contentParallaxWrapper){
                if (window.scrollY >= contentContainer.top && window.scrollY < contentContainer.bottom){
                    setTriggerHeader(true)
                }
                if (window.scrollY >= contentContainer.bottom || window.scrollY < contentContainer.top){
                    setTriggerHeader(false)
                }
            }
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return(
        // className='parallax-remove-scrollbar'
        // <div className='min-h-screen bg-secondary-color'>
        //     <motion.div
        //         className="min-h-[500px] min-w-full relative"
        //         transition={{ duration: 2, ease: "easeOut" }}
        //         style={{ y: y1, marginBottom: 50 }}
        //     >
        //         <Image
        //             src={"/content-images/image-1.png"}
        //             alt={'content image'}
        //             fill
        //             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        //             objectFit='contain'
        //             quality={100}
        //             className=' cursor-pointer transition-all duration-700	 hover:scale-110'
        //         />
        //     </motion.div>
        //     <motion.div
        //         className="min-h-[500px] min-w-full relative"
        //         transition={{ duration: 2, ease: "easeOut" }}
        //         style={{ y: y2}}
        //     >
        //         <Image
        //             src={"/content-images/image-1.png"}
        //             alt={'content image'}
        //             fill
        //             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        //             objectFit='contain'
        //             quality={100}
        //             className=' cursor-pointer transition-all duration-700	 hover:scale-110'
        //         />
        //     </motion.div>
        //     {/*@ts-ignore*/}
        //     {/*<Parallax pages={6} ref={parallaxRef}>*/}
        //
        //     {/*    <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'center' }}>*/}
        //     {/*        <div className='min-h-[500px] min-w-full relative'>*/}
        //     {/*            <Image*/}
        //     {/*                src={"/content-images/image-1.png"}*/}
        //     {/*                alt={'content image'}*/}
        //     {/*                fill*/}
        //     {/*                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
        //     {/*                objectFit='contain'*/}
        //     {/*                quality={100}*/}
        //     {/*                className=' cursor-pointer transition-all duration-700	 hover:scale-110'*/}
        //     {/*            />*/}
        //     {/*        </div>*/}
        //     {/*    </ParallaxLayer>*/}
        //     {/*    <ParallaxLayer sticky={{ start: 3, end: 4 }} style={{ ...alignCenter, justifyContent: 'center' }}>*/}
        //     {/*        <div className='min-h-[500px] min-w-full relative'>*/}
        //     {/*            <Image*/}
        //     {/*                src={"/content-images/image-1.png"}*/}
        //     {/*                alt={'content image'}*/}
        //     {/*                fill*/}
        //     {/*                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
        //     {/*                objectFit='contain'*/}
        //     {/*                quality={100}*/}
        //     {/*                className=' cursor-pointer transition-all duration-700	 hover:scale-110'*/}
        //     {/*            />*/}
        //     {/*        </div>*/}
        //     {/*    </ParallaxLayer>*/}
        //     {/*    <ParallaxLayer sticky={{ start: 5, end: 6 }} style={{ ...alignCenter, justifyContent: 'center' }}>*/}
        //     {/*        <div className='min-h-[500px] min-w-full relative'>*/}
        //     {/*            <Image*/}
        //     {/*                src={"/content-images/image-1.png"}*/}
        //     {/*                alt={'content image'}*/}
        //     {/*                fill*/}
        //     {/*                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
        //     {/*                objectFit='contain'*/}
        //     {/*                quality={100}*/}
        //     {/*                className=' cursor-pointer transition-all duration-700	 hover:scale-110'*/}
        //     {/*            />*/}
        //     {/*        </div>*/}
        //     {/*    </ParallaxLayer>*/}
        //     {/*</Parallax>*/}
        // </div>
        <>
            <div id='contentParallaxWrapper'>
                <div className='relative min-h-screen' id='heading' >
                    <h2  className={`heading-h1 !font-light text-white text-center ${triggerHeading ? 'fixed' : 'absolute'} transition-all duration-500 css`}>WE CALL THEM CHANGEMAKERS</h2>
                </div>
                <div className='container-wrapper' id='contentContainer'>
                    <div>
                        {/*{[1, 2, 3, 4, 5].map((image) => (*/}
                        {/*    <CustomImage id={image} key={image} ref={ref}/>*/}
                        {/*))}*/}
                        <div ref={ref} className='flex flex-col w-full gap-16 xl:gap-32'>
                            {[1,2,3,4,5].map(el => (
                                <div className='min-h-[500px] min-w-full relative' key={el}>
                                    <Image
                                        src={"/content-images/image-1.png"}
                                        alt={'content image'}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        objectFit='contain'
                                        quality={100}
                                        className=''
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='h-screen'/>
            </div>
        </>

    )
}
export default ContentParallax
