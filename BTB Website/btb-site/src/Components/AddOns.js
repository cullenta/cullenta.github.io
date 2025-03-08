import MenuGrid from "./MenuGrid"

// Cajun Chicken $5

// Chili Crisp Tofu $4

// Candies Jalapeno Devilled Eggs $3

// Frittata -$5

// Drinks $2

// Sweets $2

const menuitems=[
    {name:'Cajun Chicken', desc:'$2'},
    {name:'Chili Crisp Tofu', desc:'$4'},
    {name:'Candied Jalapeno Devilled Eggs', desc: '$3'},

]
const AddOns = () => {
    return (
        <div>
            <MenuGrid menuitems={menuitems}/>
        </div>
    )
}

export default AddOns