// import React from "react";
import "../index.css";

export function Navbar() {
  return (
    <div className="flex justify-center p-4">
    <nav className="flex items-center justify-between gap-8 px-6 py-3 bg-black text-white rounded-3xl shadow-lg max-w-4xl w-full">
      <div>
        <h3 className="font-bold text-lg">ac <span className="text-[#ef5455]">.</span></h3>
      </div>
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a href="#" className="hover:text-[#ef5455]">Overview</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#ef5455]">My Skills</a>
        </li>
        <li>
          <a href="#" className="hover:text-[#ef5455]">Insights</a>
        </li>
      </ul>
      <div>
            <button className="bg-[#ef5455] p-3 rounded-2xl font-bold">Get Started</button>
      </div>
      </nav>
    </div>
  );
}
