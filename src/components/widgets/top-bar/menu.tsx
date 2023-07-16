"use client"

import React from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

interface Props {
    isOpen:boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function Menu({isOpen,setIsOpen}:Props) {
    const handleMenuInteraction = () => setIsOpen(prev => !prev)
    return(
        <div>
            {!isOpen && <HiOutlineMenuAlt3 className="text-primary-color text-2xl cursor-pointer md:text-4xl" onClick={handleMenuInteraction}/>}
            {isOpen && <AiOutlineClose className="text-primary-color text-2xl cursor-pointer md:text-4xl" onClick={handleMenuInteraction}/>}
        </div>
    )
}
export default Menu
