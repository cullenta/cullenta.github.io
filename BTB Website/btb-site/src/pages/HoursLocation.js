import React from "react"
import { Link } from "react-router-dom"

const Hours = ()=>{
    return (
        <div class="flex flex-col flex-grow pt-20">
            <div class="flex flex-row flex-grow px-80 py-20">
                <div class="basis-1/2 flex flex-col justify-center font-header">
                    <div class="flex flex-row justify-center w-full text-3xl font-bold">
                            Visit us In-Store!
                    </div>
                    <div class="flex flex-row justify-center w-full font-nav text-lg font-medium pt-4">
                        382 Water St, Peterborough
                    </div>
                    <div class="flex flex-row justify-center w-full font-nav text-lg font-medium">
                        705-755-5050
                    </div>
                    <div class="flex flex-row justify-center w-full font-nav text-lg font-normal pt-4">
                        Tuesday-Thursday
                    </div>
                    <div class="flex flex-row justify-center w-full font-nav text-lg font-normal">
                        11:00am - 2:00pm
                    </div>
                    <Link to="/storeMenu">
                    <div class="flex flex-row justify-center bg-lime-100 mx-32 rounded-lg mt-4 p-2">
                        We serve to-go lunch!
                    </div>
                    </Link>
                </div>
                <div class="basis-1/2 justify-center">
                    <img class="rounded-xl w-full drop-shadow-md" src={require("../media/storefront.png")}/>
                </div>
            </div>
        </div>
    )
}

export default Hours