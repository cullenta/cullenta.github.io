import React from "react"
import { Link } from "react-router-dom"

const MenuNav = ({menus}) => {
    return (
        <div class="flex flex-row justify-center font-nav text-2xl p-10">
            {menus.map((menus) => (
                <Link to={menus.link}>
                    <div class="px-4 hover:font-bold"> 
                        {menus.which}
                    </div>
                </Link>
                
            ))}
        </div>
        
    )
}

export default MenuNav