import React, { useState } from 'react';
import CoverPage from '../../Components/CoverPage';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const axios = useAxios();
    const { data: cart, refetch: cartRefetch } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const res = await axios.get("/cart");
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
            <CoverPage text={"HOME>CART"} heading={"YOUR BOOKING CART"} img={"https://images.unsplash.com/photo-1558980664-2cd663cf8dde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
                <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">

                    <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                        <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                            <div class="space-y-6">
                                {cart?.map(bike => (
                                    <CartItem key={bike._id} bike={bike} cartRefetch={cartRefetch} />
                                ))}
                            </div>
                        </div>

                        <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Total price</dt>
                                            <dd class="text-base font-medium text-gray-400"><span className='text-2xl mr-1'>৳</span>{totalPrice}.00</dd>
                                        </dl>
                                        <dl class="flex items-center justify-between gap-4">
                                            <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Discount</dt>
                                            <dd class="text-base font-medium text-gray-400 "><span className='text-2xl mr-1'>৳</span>-{discount}.00</dd>
                                        </dl>
                                    </div>
                                    <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd class="text-base font-bold text-gray-900 dark:text-white"><span className='text-2xl mr-1'>৳</span>{totalPrice - discount}.00</dd>
                                    </dl>
                                </div>
                                <a href="#" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Checkout</a>
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
                                showCouponField && <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                                    <form class="space-y-4" onSubmit={handleApplyVoucher}>
                                        <div>
                                            <label htmlFor="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Do you have a voucher or gift card? </label>
                                            <input
                                                onChange={handleVoucherChange}
                                                type="text"
                                                name='voucher'
                                                id="voucher"
                                                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                                placeholder=""
                                                required
                                            />
                                        </div>
                                        <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply Code</button>
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