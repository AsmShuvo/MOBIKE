import React, { useContext } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';

const CartItem = ({ bike, cartRefeetch }) => {
    const { _id, model, brand, rent, image } = bike;
    const axios = useAxios();
    const { user } = useContext(AuthContext)
    const handleRemoveFromCart = () => {
        axios.delete(`/cart/${_id}/${user?.email}`)
            .then(data => {
                console.log(data.data);
                cartRefeetch();
            })
    }
    return (
        <div>
            <div class="rounded-lg border border-gray-200 w-[700px] bg-white p-4 shadow-sm dark:bg-yellow-200 md:p-6">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <div href="#" class="shrink-0 md:order-1">
                        <img class="hidden h-20 w-20 dark:block" src={image} alt="imac image" />
                    </div>

                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                        <div class="text-end md:order-4 md:w-32">
                            <p class="text-base font-bold text-gray-600"><span className='text-2xl mr-1'>৳</span>{rent} BDT<span className='text-gray-400'>/hr</span></p>
                        </div>
                    </div>

                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <div class="text-base font-bold hover:underline uppercase text-gray-600">{model} ~ {brand}</div>
                        <div class="flex items-center gap-4">
                            <button onClick={handleRemoveFromCart} type="button" class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                <span className='heading uppercase font-semibold tracking-wider'>Remove</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;