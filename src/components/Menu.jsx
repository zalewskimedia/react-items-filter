const Menu = ({ categories, filterItems }) => {
    return (
        <div className="flex justify-center items-center gap-4 mb-6">
            {categories.map(category => {
                return (
                    <button
                        className="bg-amber-500 hover:bg-amber-600 duration-300 text-white px-8 py-2 rounded-md capitalize"
                        key={category}
                        onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
export default Menu
