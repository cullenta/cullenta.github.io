import React from "react"
import MenuNav from "../Components/MenuNav"
import { Outlet } from "react-router-dom"
const CateringMenu = ()=>{
    return (
        <div>
            <MenuNav menus={[{which:'Salads', link:'salads'}, 
                {which:'Sandwiches', link:'sandwiches'},
                {which:'Bowls', link:'bowls'},
                {which:'Fritatas', link:'fritatas'},
                {which:'Soups', link:'soups'},
                {which:'Sweets', link:'sweets'} 
                ]}/>
                <Outlet />
        </div>
    )
}

export default CateringMenu