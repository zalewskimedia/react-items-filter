const Item = ({ title, category, price, img, desc }) => {
    return (
        <article className="shadow-xl pb-8">
            <img src={img} alt={title} className="w-full h-80 object-cover" />
            <header className="relative px-4">
                <h2 className="font-bold text-xl capitalize mt-2">{title}</h2>
                <span className="absolute top-1/2 right-4 -translate-y-1/2 bg-pink-500 text-white px-4 py-1 rounded-lg">
                    ${price}
                </span>
            </header>
            <p className="px-4 mt-6">{desc}</p>
        </article>
    )
}
export default Item
