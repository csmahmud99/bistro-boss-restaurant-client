const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className="flex space-x-4">
            <div>
                <img style={{borderRadius: "0px 200px 200px 200px"}} src={image} alt="menu-item-image" className="w-[118px] h-[80px]" />
            </div>
            <div>
                <h3 className="uppercase text-[#151515] font-bold">{name} ------------------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;