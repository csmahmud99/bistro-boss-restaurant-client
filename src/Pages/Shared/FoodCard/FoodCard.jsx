const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div>
                    <figure className="px-10 pt-10">
                        <img src={image} alt="food-image" className="rounded-xl" />
                    </figure>
                    <p className="absolute right-14 top-14 px-2 py-1 bg-black text-white">${price}</p>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline bg-slate-100 text-black border-0 border-b-4 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;