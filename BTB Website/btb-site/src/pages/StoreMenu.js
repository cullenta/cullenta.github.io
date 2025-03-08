import React from "react"
import { Outlet } from "react-router-dom"
import MenuNav from "../Components/MenuNav"

const StoreMenu = ()=>{
    return (
        <div class="">
            <MenuNav menus={[{which:'Salads', link:'salads'}, {which:'Add-Ons', link:'addons'}, {which:'Fritatas',link:'fritatas'}, {which:'Sweets', link:'sweets'}]}/>
            <Outlet/>
        </div>
    
    )
}

export default StoreMenu