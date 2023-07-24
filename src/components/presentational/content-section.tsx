import {AiOutlineArrowDown} from 'react-icons/ai'
import ContentParallax from "@/components/presentational/content-parallax";

function ContentSection() {
    return(
       <>
           <section className='lg:px-[200px] 2xl:px-[400px] px-mobile-container relative'>
               <div className='flex justify-center flex-col items-center gap-2.5 pt-6 mb-32'>
                   <h4 className='heading-h5 !font-light text-white'>WHERE CHANGE HAPPENS</h4>
                   <AiOutlineArrowDown className='text-2xl text-white'/>
               </div>
               <div className='flex justify-center flex-col items-center gap-16 mb-32'>
                   <h4 className='heading-h5 !font-light text-white text-center'>WE’RE A BRANDING AGENCY FOR PEOPLE TRYING TO
                       ACHIEVE THE IMPROBABLE.</h4>
                   <h2 className='heading-h4 text-white text-center'>
                       WAGWAN IS A MULTIDISCIPLINARY CREATIVE STUDIO AT THE INTERSECTION OF ART, DESIGN & TECHNOLOGY.
                   </h2>
               </div>
               {/*<div className='flex flex-col w-full gap-16 2xl:gap-32'>*/}
               {/*    {[1,2,3,4,5].map(el => (*/}
               {/*        <div className='min-h-[500px] min-w-full relative' key={el}>*/}
               {/*            <Image*/}
               {/*                src={"/content-images/image-1.png"}*/}
               {/*                alt={'content image'}*/}
               {/*                fill*/}
               {/*                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
               {/*                objectFit='contain'*/}
               {/*                quality={100}*/}
               {/*                className=''*/}
               {/*            />*/}
               {/*        </div>*/}
               {/*    ))}*/}
               {/*</div>*/}
               {/*<div className='min-h-screen flex justify-center items-center' style={{*/}
               {/*    transformStyle: 'preserve-3d'*/}
               {/*}}>*/}
               {/*    <h2 className='heading-h1 text-white !font-light text-center'>WE CALL THEM CHANGEMAKERS</h2>*/}
               {/*</div>*/}
           </section>
           <ContentParallax/>
       </>

)
}
export default ContentSection
