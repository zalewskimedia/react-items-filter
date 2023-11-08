import { useState } from "react"
import Title from "./components/Title"
import data from "../data"
import Items from "./components/Items"
import Menu from "./components/Menu"

const tempCategories = data.map(item => item.category)
const tempSet = new Set(tempCategories)
const categoriesArr = ["all", ...tempSet]

function App() {
    const [items, setItems] = useState(data)
    const [categories, setCategories] = useState(categoriesArr)
    const filterItems = category => {
        if (category === "all") {
            setItems(data)
            return
        }
        const newItems = data.filter(item => item.category === category)
        setItems(newItems)
    }
    return (
        <div className="container mx-auto px-8 py-16">
            <Title title="Filter Items" />
            <Menu categories={categories} filterItems={filterItems} />
            <Items items={items} />
        </div>
    )
}

export default App
