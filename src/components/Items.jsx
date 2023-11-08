import Item from "./Item"

const Items = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {items.map(item => {
                return <Item key={item.id} {...item} />
            })}
        </div>
    )
}
export default Items
