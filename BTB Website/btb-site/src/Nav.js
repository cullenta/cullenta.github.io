import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MenuIcon, XIcon } from "lucide-react"
import { useViewportSize } from "@mantine/hooks"

const MenuDropdown = ( props ) => {
    const [ display, setDisplay ] = useState( 'none' )

    function handleHover() {

        setDisplay( 'block' )

    }

    function handleExit(){
        setDisplay( 'none')
    }
    return (
        <div onMouseOver={handleHover} onMouseLeave={handleExit}>
            <div>

                MENU

            </div>
            <div class="md:absolute bg-lime-100">
                <div style={{display:display}} class="flex flex-col gap-4 md:gap-0">

                { props.children }

                </div>
            </div>
        </div>
    )
}

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const { width } = useViewportSize()
    const isMobile = width < 768

    return (
    <nav class="font-nav bg-lime-200 fixed w-full h-36 pb-4 z-20 top-0 start-0 flex flex-row justify-center xl:px-36 lg:px-20 md:px-4 font-bold text-xl">
        
        {!isMobile && (
        <div class="flex flex-col justify-center basis-1/3 bg-lime-200">
        <ul class="flex flex-row justify-between pr-10">
            <li class="hover:font-normal"><MenuDropdown>
                <Link to='/storeMenu'>
                    <div class="p-10 hover:bg-lime-50">
                        STORE MENU
                    </div>
                </Link>
                <Link to='/cateringMenu'>
                    <div class="p-10 hover:bg-lime-50">
                    CATERING MENU
                    </div>
                </Link>
            </MenuDropdown></li>
            <li class="hover:font-normal"><Link to='catering'>CATERING</Link></li>
        </ul>
        </div>
        )}
        
        <div class="flex-auto flex justify-center xl:pl-24 xl:pr-36 lg:pl-8 lg:pr-20 shrink-0">
            <img src={require("./bythebridge.png")} alt="logo"/>
        </div>

        {!isMobile && (
        <div class="flex flex-col justify-center basis-1/3">
        <ul class="flex flex-row justify-between">
            <li class="hover:font-normal"><Link to='/'>ABOUT US</Link></li>
            
            <li class="hover:font-normal"><Link to='hours'>HOURS/ LOCATION</Link></li>
        </ul>
        </div>
        )}
        
        {(isMobile &&
        <div class={"bg-lime-200 fixed w-1/2 top-36 right-0 z-21 h-dvh transform transition-transform duration-300 ease-in-out " + (!isMenuOpen && "translate-x-full")}>
            <ul class="flex flex-col justify-between gap-4 p-4">
                <li class=""><Link to='/'>ABOUT US</Link></li>
                
                <li class=""><Link to='hours'>HOURS/ LOCATION</Link></li>

                <li class=""><MenuDropdown>
                    <Link to='/storeMenu'>
                        <div class="">
                            STORE MENU
                        </div>
                    </Link>
                    <Link to='/cateringMenu'>
                        <div class="">
                        CATERING MENU
                        </div>
                    </Link>
                </MenuDropdown></li>
                
                <li class=""><Link to='catering'>CATERING</Link></li>
            </ul>
        </div>
        )}

        <button aria-labelledby='Menu Toggle Button' className='block md:hidden pr-4' onClick={()=>(setMenuOpen(!isMenuOpen))}>
            {isMenuOpen? (<XIcon class="size-6 text-secondary"/>): (<MenuIcon class="size-6 text-secondary"/>) }
        </button>

    </nav>)
}

export default NavBar