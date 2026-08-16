import React from "react";
import viteLogo from "../assets/vite.svg";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md">
      <img src={viteLogo} alt="" />
      <ul className="flex gap-4">
         <li>
          <NavLink className={({isActive}) => isActive && 'text-blue-700 underline'} to="/">Home</NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => isActive && 'text-blue-700 underline'} to="/about">About</NavLink>
        </li>

        <li>
          <NavLink className={({isActive}) => isActive && 'text-blue-700 underline'} to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}
