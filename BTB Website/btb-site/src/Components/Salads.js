import React from "react"
import MenuGrid from "./MenuGrid"
import { useLocation } from "react-router-dom"

// Ginger-Sesame-Lime Slaw with Chili-Nuts

// Rubbed Kale with Pistachio Crunch

// Grilled Red Cabbage Slaw (sesame, rice vinegar, ginger)

// Maple Balsamic Beets with red onions

// Baby Spinach, Mixed Greens and Toasted Pumpkin Seeds with Tamari-Nutch Dressing

// Sweet Soy Vermicelli Garnished with Red Pepper and Green Onions

// Creamy Sriracha-Lime Pasta (Other creamy paste options)

// Bruschetta Pasta, tomatoes, fresh basil, garlic and olive

const menuitems=[
    {name:'Chickpea', desc: 'Creamy Curried Chickpeas, Green Onion, and Cranberries'},
    {name:'Kale', desc: 'Rubbed Kale with Pistachio Crunch'},
    {name:'Sesame Slaw', desc: 'Grilled Red Cabbage Slaw (sesame, rice vinegar, ginger)'},
    {name:'Balsamic Beets', desc: 'Maple Balsamic Beets with red onions'},
    {name: 'Nutch', desc: 'Baby Spinach, Mixed Greens and Toasted Pumpkin Seeds with Tamari-Nutch Dressing'},
    {name: 'Vermicelli', desc: 'Sweet Soy Vermicelli Garnished with Red Pepper and Green Onions'},
    {name: 'Creamy Pasta', desc: 'Creamy Sriracha-Lime Pasta (Other creamy paste options)'},
    {name: 'Bruschetta', desc: 'Bruschetta Pasta, tomatoes, fresh basil, garlic and olive'}
]
const Salads = () => {
    var price = (useLocation().pathname === '/storeMenu/salads' | useLocation().pathname === '/storeMenu')
    
    return (
        <div class="flex flex-col center">
            
            {!!price && <div>
                <div class="flex flex-row justify-center">
                    <div class="font-header text-3xl">Mix and Match Salad Bowls</div>
                </div>
                <div class="flex flex-row justify-center">
                    <div class="text-xl">Size: regular $12.5, Bigger $16.00</div>
                </div>
                </div>
            }
            
            <MenuGrid menuitems={menuitems}/>
        </div>
    )
}

export default Salads