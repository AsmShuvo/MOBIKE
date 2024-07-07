import React, { useContext, useState } from 'react';
import CoverPage from '../../Components/CoverPage';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Cart = () => {
    const axios = useAxios();
    const { user } = useContext(AuthContext)
    const { data: cart, refetch: cartRefetch } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axios.get(`/cart/${user?.email}`);
            return res.data;
        }
    });
    console.log(cart);

    const totalPrice = cart?.reduce((sum, bike) => sum + bike.rent, 0) || 0;
    console.log(totalPrice);

    const [discount, setDiscount] = useState(0);

    const [voucher, setVoucher] = useState("");
    const [showCouponField, setshowCouponField] = useState(true);

    const handleVoucherChange = (event) => {
        setVoucher(event.target.value);
    };

    const handleApplyVoucher = (e) => {
        e.preventDefault();
        e.target.reset();
        console.log(voucher)
        if (voucher == "PICKME") {
            console.log(discount);
            setDiscount(totalPrice * 0.25);
            setshowCouponField(false);
            console.log(discount);
            console.log(totalPrice);
        }

    };


    return (
        <div>
            <section class="antialiased pl-64 pr-4">
                <div class="mx-auto max-w-screen-xl  ">

                    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div class="mx-auto flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div class="space-y-6">
                                {cart?.map(bike => (
                                    <CartItem key={bike._id} bike={bike} cartRefetch={cartRefetch} />
                                ))}
                            </div>
                        </div>

                        <div class="mx-auto border-e mt-6 flex-1 space-y-6 lg:mt-0 w-2/3">
                            <div class="space-y-4 w-2/3 rounded-lg p-4 shadow-sm dark:border-gray-700 dark:bg-yellow-200 sm:p-6">
                                <p class="text-xl font-semibold text-gray-900">Order summary</p>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-700 dark:text-gray-600">Total price</dt>
                                            <dd class="text-base font-medium text-gray-700"><span className='text-2xl mr-1'>৳</span>{totalPrice}.00</dd>
                                        </dl>
                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-red-700">Discount</dt>
                                            <dd class="text-base font-medium text-red-700 "><span className='text-2xl mr-1'>৳</span>-{discount}.00</dd>
                                        </dl>
                                    </div>
                                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt class="text-base font-bold text-gray-900 dark:text-gray-700">Total</dt>
                                        <dd class="text-base font-bold text-gray-900 dark:text-gray-700"><span className='text-2xl mr-1'>৳</span>{totalPrice - discount}.00</dd>
                                    </dl>
                                </div>
                                <Link to="/dashboard/payment" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5  font-medium text-lg btn btn-primary text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</Link>
                                <div class="flex items-center justify-center gap-2">
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400"> or </span>
                                    <Link to="/bikes" title="" class="inline-flex items-center gap-2 text-sm font-medium text-primary underline hover:no-underline dark:text-primary-500">
                                        Continue Shopping
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {
                                showCouponField && <div class="space-y-4 w-2/3 rounded-lg  bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-yellow-200 sm:p-6">
                                    <form class="space-y-4" onSubmit={handleApplyVoucher}>
                                        <div>
                                            <label htmlFor="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-600"> Do you have a voucher or gift card? </label>
                                            <input
                                                onChange={handleVoucherChange}
                                                type="text"
                                                name='voucher'
                                                id="voucher"
                                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-300 dark:text-black dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder=""
                                                required
                                            />
                                        </div>
                                        <button type="submit" class="btn w-full btn-outline btn-ghost">Apply Code</button>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;
