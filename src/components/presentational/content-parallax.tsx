"use client"

import {IParallax} from "@react-spring/parallax";
import Image from "next/image";
import React, {Fragment, useEffect, useRef, useState} from "react";
import {Variants} from "framer-motion";
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
    const [isHovering,setIsHovering] = useState(false)
    const [hoverCords,setHoverCords] = useState({
        top:0,
        left:0
    })
    // const { scrollYProgress } = useScroll();
    // const y1 = useTransform(scrollYProgress, [0, 500], [0, 0]);
    // const y2 = useTransform(scrollYProgress, [0, 500], [0, 0]);
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });
    const { ref,inView,entry } = useInView({
        threshold:0.2
    });
    const [isInView,setIsInView] = useState(false)

    useEffect(()=>{
        setIsInView(inView)
    },[inView])
    // const [triggerHeading,setTriggerHeader] = useState(false)
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
                // if (window.scrollY >= contentContainer.top && window.scrollY < contentContainer.bottom){
                //     setTriggerHeader(true)
                // }
                // if (window.scrollY >= contentContainer.bottom || window.scrollY < contentContainer.top){
                //     setTriggerHeader(false)
                //
                // }
            }
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    function onMouseMove(e:  React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setHoverCords({
            top:e.pageY,
            left:e.pageX
        })
    }

    console.log(inView,"inView")
    console.log(entry,"entry")
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
            <section  ref={ref} id='contentParallaxWrapper'   className={`w-full h-full transition-all duration-500 pb-[600px] ${isInView ? 'bg-[#FFF2FF]' : 'bg-black'}`}>
                {/*min-h-screen*/}
                <div className='relative pb-[200px] lg:px-[150px] xl:px-[200px] 2xl:px-[400px] px-mobile-container' id='heading' >
                    {/*${triggerHeading ? 'fixed' : 'absolute'}*/}
                    <h2 className={`transition-all duration-500 ${isInView ? 'text-black' : 'text-white'} heading-h1 !font-light text-center  transition-all duration-500`}>WE CALL THEM CHANGE MAKERS</h2>
                </div>
                <div className='container-wrapper' id='contentContainer'>
                    <div>
                        {/*{[1, 2, 3, 4, 5].map((image) => (*/}
                        {/*    <CustomImage id={image} key={image} ref={ref}/>*/}
                        {/*))}*/}
                        <div className='flex flex-col w-full gap-16 xl:gap-32'>
                            {[1,2,3,4,5].map(el => (
                                <Fragment key={el}>
                                    <div className='min-h-[500px] min-w-full relative overflow-hidden'>
                                        <Image
                                            src={"/content-images/image-1.png"}
                                            alt={'content image'}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            objectFit='contain'
                                            quality={100}
                                            className={`transition-all duration-700 hover:scale-110 !w-fit !left-1/2 -translate-x-1/2`}
                                            onMouseMove={(e)=>onMouseMove(e)} onMouseEnter={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}
                                        />
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/*<div className='h-screen'/>*/}
            <span
                className={`${isHovering ? 'opacity-100' : 'opacity-0'} arrow-cursor select-none hidden lg:block absolute text-center -translate-x-1/2 -translate-y-1/2`}
                style={{
                    top: `${hoverCords.top}px`,
                    left: `${hoverCords.left}px`
                }}>
                                        <Image
                                            src={`/arrows/arrow-1.png`}
                                            alt={'arrow image'}
                                            width={80}
                                            height={40}
                                            quality={100}
                                        />
                                    </span>
        </>

    )
}
export default ContentParallax
