import React from "react"
import { Link } from "react-router-dom"

const Footer = () =>{
    return (
        <div class="w-full bg-black flex flex-row justify-between">
            <div class="basis-1/3 flex flex-col p-10 gap-4">
                <div class="text-white underline flex flex-row justify-center">
                Menu
                </div>
                <div class="text-white flex flex-row justify-center">
                    <ul class="flex flex-col gap-4">
                            <li><Link to="storeMenu">In-Store</Link></li>
                            <li><Link to="cateringMenu">Catering</Link></li>
                    </ul>
                </div>
                
            </div>
            <div class="basis-1/3 flex flex-col p-10">
                <div class="text-white underline flex flex-row justify-center">
                    Info
                </div>
            </div>
            <div class="basis-1/3 flex flex-col p-10">
                <div class="flex flex-row justify-end">
                    <img class="h-32 w-60" src={require("./media/logo_white.png")}/>
                </div>
            </div>
        </div>
    )
}

export default Footer