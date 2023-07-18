import Link from "next/link";
import React from "react";


interface Props {
    setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
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
function MainMenu({setIsOpen} : Props) {
    return(
        <section className='bg-tertiary-color w-full h-screen absolute z-10 flex items-center justify-center'>
            <ul className="text-center">
                {menu.map(el => (
                    <li key={el.title}>
                        <Link href={el.link} className="heading-h1 font-light" onClick={() => setIsOpen(false)}>
                            {el.title}
                        </Link>
                    </li>
                    ))}
            </ul>
        </section>
    )
}
export default MainMenu
