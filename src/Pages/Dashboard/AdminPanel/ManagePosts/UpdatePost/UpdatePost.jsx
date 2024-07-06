import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";

const UpdatePost = () => {
    useEffect(() => {
        document.title = "Mobike | Update Post";
    }, []);

    const 

    const axios = useAxios();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const model = form.model.value;
        const brand = form.brand.value;
        const rent = form.rent.value;
        const mileage = form.mileage.value;
        const owner_name = form.owner_name.value;
        const owner_email = form.owner_email.value;
        const owner_whatsapp = form.owner_whatsapp.value;
        const photo = form.photo.value;
        const newItem = {
            model, brand, rent, mileage, owner_name, owner_email, owner_whatsapp, image: photo, love: 0, views: 0
        };
        console.log(newItem);
        axios.post("/bikes", newItem)
            .then((data) => {
                if (data.data.insertedId) {
                    Swal.fire("Posted successfully");
                    form.reset();
                }
            })
            .catch((err) => {
                console.log("Error while posting", err.message);
            });
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-lg shadow-gray-400 mt-8 rounded-md">
            <h1 className="text-xl font-semibold mb-4 text-gray-700 heading">Update New Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bike Model
                    </label>
                    <input
                        type="text"
                        name="model"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bike Brand
                    </label>
                    <input
                        type="text"
                        name="brand"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Image URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Rent Per Day (BDT)
                        </label>
                        <input
                            type="number"
                            name="rent"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Mileage in KMPL
                        </label>
                        <input
                            type="number"
                            name="mileage"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Owner's Email
                        </label>
                        <input
                            type="text"
                            name="owner_email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Owner_whatsapp
                            </label>
                            <input
                                type="number"
                                name="owner_whatsapp"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Owner_name
                            </label>
                            <input
                                type="text"
                                name="owner_name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gray-700 text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                >
                    Post
                </button>
            </form>
        </div>
    );
};

export default UpdatePost;