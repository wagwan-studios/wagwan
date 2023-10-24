"use client"

import React from "react"
import Menu from "../../../../public/icons/menu.svg";
import Close from "../../../../public/icons/close.svg";

interface Props {
    isMenuOpen : boolean
    onMenuStateChange: () => void
}
function MobileMenuButton({isMenuOpen,onMenuStateChange}: Props) {
    return(
        <button onClick={onMenuStateChange}>
            {!isMenuOpen && <Menu/>}
            {isMenuOpen && <Close/>}
        </button>
    )
}
export default MobileMenuButton
