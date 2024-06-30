import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaOpencart } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.displayName)
  return (
    <div>
      <div className="navbar bg-white h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="heading font-bold" to="/">
                  HOME
                </NavLink>
              </li>
              <li>
                <details className="border-none  outline-none">
                  <summary className="m-1 btn border-white outline-white uppercase heading text-gray-500 font-bold">PAGES</summary>
                  <ul className=" shadow menu dropdown-content z-[1] rounded-box">
                    <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/bikes">MOTORCYCLES</NavLink></li>
                    <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/blogs">BLOGS</NavLink></li>
                    <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/about-us">TEAM</NavLink></li>
                    <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/services">SERVICES</NavLink></li>
                    <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/gallery">GALLERY</NavLink></li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink className="heading font-bold" to="/about-us">
                  ABOUT US
                </NavLink>
              </li>
              <li>
              </li>
              <li>
                <NavLink className="heading font-bold" to="/">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <span className="text-primary lg:text-5xl plain tracking-wider font-extrabold">
              {" "}
              <span className="text-black">MO</span>BIKE
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu flex items-center menu-horizontal gap-8 px-1">
            <li>
              <NavLink
                className="heading text-xl text-gray-500 font-bold"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <details className="border-none  outline-none">
                <summary className="m-1 btn border-white outline-white uppercase heading text-xl text-gray-500 font-bold">PAGES</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                  <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/bikes">MOTORCYCLES</NavLink></li>
                  <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/blogs">BLOGS</NavLink></li>
                  <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/about-us">TEAM</NavLink></li>
                  <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/services">SERVICES</NavLink></li>
                  <li><NavLink className="text-gray-700 font-semibold uppercase heading" to="/gallery">GALLERY</NavLink></li>
                </ul>
              </details>
            </li>
            <li>
              <NavLink
                className="heading text-xl text-gray-500 font-bold"
                to="/about-us"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                className="heading text-xl text-gray-500 font-bold"
                to="/contact"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <Link to="/dashboard/cart"><FaOpencart title="cart" className="text-4xl text-primary p-1 rounded" /></Link>
          <label className="input input-bordered border-gray-200 text-white flex items-center gap-2">
            <input
              type="text"
              className="grow text-primary"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-8 h-8 rounded-md p-1 opacity-70 bg-primary"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {
            user && <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">You</span>
                  </a>
                </li>
                <li onClick={() => logOut()} ><a>Logout</a></li>
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
