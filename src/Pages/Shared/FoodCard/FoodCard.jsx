import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { image, name, recipe, price, _id } = item;

    const { user } = useContext(AuthContext);

    const [, refetch] = useCart();

    const navigate = useNavigate();

    const location = useLocation();

    const handleAddToCart = cartItem => {
        console.log(cartItem);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch cart to update the number of items in the cart
                        refetch();

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }
        else {
            Swal.fire({
                title: 'Please Log In at First to Order the Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    };

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
                        <button onClick={() => { handleAddToCart(item) }} className="btn btn-outline bg-slate-100 text-black border-0 border-b-4 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;