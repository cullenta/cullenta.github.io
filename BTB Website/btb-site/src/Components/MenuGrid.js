const MenuGrid = ({menuitems}) => {
    return (
        <div class="md:px-32 flex flex-row flex-wrap">
            {menuitems.map((item) => (
                <div class="lg:basis-1/3 md:basis-1/2 sm:basis-full">
                <div class="p-10 font-header flex flex-col">
                        <div class="text-4xl">
                            {item.name}
                        </div>
                        <div> 
                            {item.desc}
                        </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default MenuGrid