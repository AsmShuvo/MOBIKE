import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaHome, FaList, FaMotorcycle, FaPersonBooth } from 'react-icons/fa';
import { FaManatSign, FaPeopleGroup, FaPerson, FaWeightScale } from 'react-icons/fa6';
import { IoIosStats } from 'react-icons/io';
import { LuShoppingCart } from 'react-icons/lu';
import { MdAdminPanelSettings, MdPayment } from 'react-icons/md';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { useAdmin } from '../hooks/useAdmin';
import { CiSettings } from 'react-icons/ci';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { isAdmin } = useAdmin();
    console.log(isAdmin);
    return (
        <div className='flex flex-row-reverse'>
            <div>

                <aside className="fixed inset-y-0 left-0 bg-white shadow-md shadow-gray-400 max-h-screen">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex-grow">
                            <div className="px-4 py-6 text-center border-b">
                                <h1 className="text-xl font-bold leading-none">
                                    <span className="text-yellow-700">MoBike</span> Dashboard
                                </h1>
                            </div>
                            <div className="p-4">
                                <ul className="space-y-1">
                                    {
                                        isAdmin ?
                                            <>
                                                {/*--------------------- Admin routes------------ */}
                                                <li>
                                                    <NavLink to="/dashboard/post-bike"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <FaMotorcycle />
                                                        Post Bike
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/dashboard/manage-posts"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <CiSettings />
                                                        Manage Posts
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/dashboard/manage-bookings"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <FaList />
                                                        Manage Bookings
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink to="/"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-primary rounded-xl font-bold text-sm text-white py-3 px-4"
                                                    >
                                                        <FaHome />
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/bikes"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-green-600 rounded-xl font-bold text-sm text-white py-3 px-4"
                                                    >
                                                        <FaMotorcycle />
                                                        All Posts
                                                    </NavLink>
                                                </li>
                                            </>
                                            :
                                            <>
                                                {/*--------------------- user routes------------ */}
                                                <li>
                                                    <NavLink to="/dashboard/profile"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <CgProfile />
                                                        Your Profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/dashboard/cart"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <LuShoppingCart />
                                                        Cart
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/dashboard/analytics"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <IoIosStats /> Analytics

                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="payments-history"
                                                        className="flex gap-2 items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                                                    >
                                                        <MdPayment /> Payment History
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-primary rounded-xl font-bold text-sm text-white py-3 px-4"
                                                    >
                                                        <FaHome />
                                                        Home
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/bikes"
                                                        href="javascript:void(0)"
                                                        className="flex gap-2 items-center bg-green-600 rounded-xl font-bold text-sm text-white py-3 px-4"
                                                    >
                                                        <FaMotorcycle />
                                                        All Posts
                                                    </NavLink>
                                                </li>
                                            </>
                                    }






                                </ul>
                            </div>
                        </div>
                        <div className="p-4 border-t">
                            <button className="flex items-center space-x-4 h-12 px-4 rounded-md text-gray-600 group">
                                <div className="transition group-hover:-translate-y-1 group-hover:text-opacity-0 duration-300">
                                    <svg
                                        className="text-lg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 12c2.211 0 4-1.789 4-4s-1.789-4-4-4-4 1.789-4 4 1.789 4 4 4zM12 14c-2.671 0-8 1.336-8 4v2h16v-2c0-2.664-5.329-4-8-4z" />
                                    </svg>
                                </div>
                                <div className="transition group-hover:-translate-y-1 group-hover:text-opacity-100 duration-300 opacity-0 text-opacity-0 group-hover:opacity-100 group-hover:text-opacity-100 absolute left-4 text-gray-600 font-semibold">
                                    Samantha M.
                                </div>
                            </button>
                        </div>
                    </div>
                </aside>


            </div>
            <div className='flex-1'><Outlet /></div>
        </div>
    );
};

export default Dashboard;