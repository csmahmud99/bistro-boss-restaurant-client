import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const response = await fetch("http://localhost:5000/users");
        return response.json();
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} have been made an Admin successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleDelete = user => {

    };

    return (
        <div>
            <Helmet>
                <title>All Users | Bistro Boss Restaurant</title>
            </Helmet>

            <section className="bg-white p-10 my-10">
                <SectionTitle
                    subHeading="How Many??"
                    heading="Manage All Users"
                />

                <div>
                    <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr
                                        key={user._id}
                                    >
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-warning bg-[#D1A054] btn-md text-white text-xl">
                                                {
                                                    user.role === "admin" ? "admin" : <FaUserShield />
                                                }
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user)} className="btn btn-error bg-[#B91C1C] btn-md text-white text-xl">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AllUsers;