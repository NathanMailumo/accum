// import React from "react";
import "../index.css";
import logo from "../assets/logo3.png";

export function Navbar() {
  return (
    <div className="flex justify-center p-4 bg-white bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] [background-size:50px_60px]">
    <nav className="flex items-center justify-between gap-8 px-6 py-3 bg-black text-white rounded-3xl shadow-lg max-w-4xl w-full">
      <div>
        {/* <h3 className="font-bold text-lg">ac <span className="text-[#ef5455]">.</span></h3> */}
        <img src={logo} alt="" className="w-27"/>
      </div>
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a href="#" className="hover:text-[#ef5455] space-mono-regular">Overview</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#ef5455] space-mono-regular">My Skills</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#ef5455] space-mono-regular">Insights</a>
        </li>
      </ul>
      <div>
            <button className="bg-[#ef5455] p-3 rounded-2xl font-bold space-mono-regular">Get Started</button>
      </div>
      </nav>
    </div>
  );
}
