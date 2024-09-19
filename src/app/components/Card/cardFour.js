export default function cardFour({image, restaurant, type, price, rating, review}) {
    const info = [
        {
            restaurant: "Toni's Courtyard Cafe",
            type: "Cafe",
            price: "$$",
            rating: "*****",
            review: "26"
        },
    ]

    return (
<>
    <div className="flex flex-col bg-white py-16">
        <div className="flex flex-col md:flex-row shadow-xl m-4 rounded-xl overflow-hidden">
            <div className="w-full md:w-36 h-40 overflow-hidden">
                <img 
                    src={image}
                    className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col gap-1 p-4">
                <p className="font-bold text-lg md:text-xl">{restaurant}</p>
                <p className="text-sm md:text-base">{type} ({price})</p>
                <p className="text-sm md:text-base">{rating} {review} reviews</p>
                <button className="bg-orange-500 p-2 w-full md:w-24 rounded-md">
                    See menu
                </button>
            </div>
        </div>
    </div>
</>
    )
}