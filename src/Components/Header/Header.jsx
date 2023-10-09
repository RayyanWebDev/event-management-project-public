import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged Out ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const NavLists = (
    <>
      <div className="grid gap-32 mr-7">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/movies">MOVIES</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/TvShows">TV SHOWS</NavLink>
          </li>
        </ul>
        <ul>
          <li className="w-24">
            <NavLink to="/SignUp">SIGN UP</NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-sign-in   w-24"></div>
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
              className="menu menu-sm dropdown-content mt-3  p-2  w-52 "
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
        <div>
          {user ? (
            <>
              <span>{user.email}</span>
              <button onClick={handleLogOut}>Sign Out</button>
            </>
          ) : (
            <Link to="/SignIn">
              <button className="w-24">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
