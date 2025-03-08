// - Roasted Rosemary-Chicken-Apple Salad with Mixed Greens on Multigrain Croissant
// - Cranberry Baguettine with Bacon, Brie, Cranberry, Caramelized-Onion, Arugula
// - *Vegetarianize the above sandwich - Swap Bacon for Maple Candied Walnuts*
// - Grilled Flank and Red Onions, Cheddar, Kosher Pickle-Mayo and Greens
// - Ham, Havarti, Cucumber, Pickled Reds, Fresh Basil-Mayo, and Greens
// - Smoked Salmon, Caper-Dill- Cream Cheese, Cucumber, Red Onion on a Pretzel Bun
// - Multigrain Croissant with Egg Salad, Pickled Reds, and Sunflower-Microgreens
// - Feta, Spice Baked Sweet Potato, Garlic Aioli, Zippy Beets, Fresh Herbs – Vegetarian
// - Chickpea-Almond Smash with Roasted Sweet peppers, Kosher Dill Pickle and Greens on a Multi-Grain Croissant– Vegetarian
// - Veganize the above sandwich – vegan mayo, and on a Pretzel Bun
// - Chili-Crisp Tofu, Cucumber, Red pepper, red Onion, Sriracha-Mayo on a Ciabatta - Vegan

import MenuGrid from "./MenuGrid"

const menuitems = [
    {name: 'Chicken Apple', desc: 'Roasted Rosemary-Chicken-Apple Salad with Mixed Greens on Multigrain Croissant'},
    {name: 'Bacon Brie', desc: 'Cranberry Baguettine with Bacon, Brie, Cranberry, Caramelized-Onion, Arugula. ** Vegetarian version with Maple Candied Walnuts'},
    {name: 'Worlds Best Sandwich', desc: 'Grilled Flank and Red Onions, Cheddar, Kosher Pickle-Mayo and Greens'},
    {name: 'Ham and Cheese', desc:'Ham, Havarti, Cucumber, Pickled Reds, Fresh Basil-Mayo, and Greens'},
    {name: 'Smoked Salmon', desc: 'Smoked Salmon, Caper-Dill- Cream Cheese, Cucumber, Red Onion on a Pretzel Bun'},
    {name: 'Egg Salad Sandwich', desc: 'Multigrain Croissant with Egg Salad, Pickled Reds, and Sunflower-Microgreens'},
    {name: 'Sweet Potato', desc: 'Feta, Spice Baked Sweet Potato, Garlic Aioli, Zippy Beets, Fresh Herbs – Vegetarian'},
    {name: 'Chickpea', desc: 'Chickpea-Almond Smash with Roasted Sweet peppers, Kosher Dill Pickle and Greens on a Multi-Grain Croissant– Vegetarian ** Vegan version on a pretzel bun'},
    {name: 'Chili Tofu', desc: 'Chili-Crisp Tofu, Cucumber, Red pepper, red Onion, Sriracha-Mayo on a Ciabatta - Vegan'}
]
const Sandwiches = () => {
    return (
        <div>
            <MenuGrid menuitems={menuitems}></MenuGrid>
        </div>
    )
}

export default Sandwiches