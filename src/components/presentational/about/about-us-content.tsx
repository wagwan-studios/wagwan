import React from "react";
import AboutValues from "@/components/presentational/about/about-values";

const aboutUsValuesList = [
    {
        title:"Change is more than skin deep",
        description:"We’ll help you make strategic and creative leaps that will drive\n" +
            "change inside and outside your business."
    },
    {
        title:"Being brave does not mean taking risks",
        description:"Change takes bravery. But our process and your involvement eliminates any risky big reveal."
    },
    {
        title:"Global does not mean all over the place",
        description:"Yes we work with an international client list. But being together in a single studio ensures clarity and collaboration."
    },
    {
        title:"Prima donnas aren’t allowed",
        description:"Ideas can and should come from anywhere. So we enforce a strict no ego policy."
    },
    {
        title:"Quality comes before quantity",
        description:"We’re here to do the best work of our lives. So we only take on clients where we know we can make an impact."
    },
]
function AboutUsContent() {
    return(
        <section className='lg:px-[180px] 2xl:px-[350px] px-mobile-container py-28'>
            <h1 className={`heading-h1 !font-light text-white text-center pb-8`}>WHAT IT&lsquo;S LIKE TO PARTNER WITH US</h1>
            <p className='heading-h6 !font-light text-white text-center pb-5'>
                If you’re doing things differently, you need a branding
                agency doing things differently.
            </p>
            <p className='heading-h6 !font-light text-white text-center pb-5'>
                We’ve built an agency that champions ideas not egos,
                a process that rewards brave clients, to create work
                that doesn’t conform to convention.
            </p>
            <p className='heading-h6 !font-light text-white text-center pb-5'>
                We will challenge you, we will change you, and you just
                might change the world.
            </p>
            <div className='pt-20 pb-24'>
                <h6 className='heading-h5 !font-light text-white text-center pb-16 md:pb-20'>Wagwan Studios is a place where</h6>
                <article className='flex flex-col items-center gap-32 md:gap-[300px]'>
                    {aboutUsValuesList.map((el,index) => (
                        <AboutValues key={index} description={el.description} title={el.title}/>
                    ))}
                </article>
            </div>
        </section>
    )
}
export default AboutUsContent
