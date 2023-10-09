import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Header = () => {
  const { user } = useState(AuthContext);
  console.log(user);

  const NavLists = (
    <>
      <div className="grid gap-32 mr-7">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/movies">MOVIES</NavLink>
          </li>

          <li>
            <NavLink to="/TvShows">TV SHOWS</NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-sign-in ml-96">
        <ul>
          {" "}
          <li>
            <NavLink to="/SignIn">SIGN IN</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp">SIGN UP</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-screen-2xl mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <ul>
                <li>{NavLists}</li>
              </ul>
            </ul>
          </div>
          <img
            className=""
            src="https://i.ibb.co/dBvGNZR/686ca26b574b16d59ccb03d2da0f3ae7.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex  w-8/12">
          <ul className="menu menu-horizontal px-1 ">
            <ul>
              <li className="Navlists grid grid-cols-4  ">{NavLists}</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
