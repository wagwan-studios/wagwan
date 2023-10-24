import {AiOutlineArrowRight,AiOutlineArrowDown} from "react-icons/ai"

function ServiceSection() {
    return(
        <section className='md:px-[30px] px-mobile-container flex flex-col gap-14 md:flex-row md:justify-between'>
            <div className='flex flex-col h-fit md:flex-row md:items-center md:gap-10 md:sticky md:top-0 2xl:gap-28'>
                <h4 className='heading-h4 !font-light text-white capitalize'>We partner on</h4>
                <AiOutlineArrowRight className='heading-h4 !font-light text-white hidden lg:block'/>
                <AiOutlineArrowDown className='heading-h4 !font-light text-white md:hidden'/>

            </div>
            <ul className='flex flex-col gap-6'>
                <li className='heading-h4 !font-light text-white capitalize'>Brand Strategy</li>
                <li className='heading-h4 !font-light text-white capitalize'>Visual and verbal identity</li>
                <li className='heading-h4 !font-light text-white capitalize'>UX and UI design</li>
                <li className='heading-h4 !font-light text-white capitalize'>Messaging</li>
                <li className='heading-h4 !font-light text-white capitalize'>Campaigns</li>
                <li className='heading-h4 !font-light text-white capitalize'>Film and photography</li>
                <li className='heading-h4 !font-light text-white capitalize'>Environment branding</li>
                <li className='heading-h4 !font-light text-white capitalize'>Brand guardianship</li>
                <li className='heading-h4 !font-light text-white capitalize'>Employer branding</li>
            </ul>
        </section>
    )
}
export default ServiceSection
