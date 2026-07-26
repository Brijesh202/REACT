import React from "react";
import viteLogo from "../assets/vite.svg";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 md:px-8 shadow-md">
      <img src={viteLogo} alt="" />
      <ul className="flex gap-4">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </header>
  );
}
