// import React from "react";
import "../index.css";
import logo from "../assets/logo3.png";

export function Navbar() {
  return (
    <div className="flex justify-center bg-white p-4 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] [background-size:50px_60px]">
      <nav className="flex w-full max-w-4xl items-center justify-between gap-8 rounded-3xl bg-[#2f3657] px-6 py-3 text-white shadow-lg">
        <div>
          <img src={logo} alt="Accum" className="w-27" />
        </div>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a
              href="#overview"
              className="space-mono-regular hover:text-[#ef5455]"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="space-mono-regular hover:text-[#ef5455]"
            >
              My Skills
            </a>
          </li>
          <li>
            <a
              href="#insights"
              className="space-mono-regular hover:text-[#ef5455]"
            >
              Insights
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#skills"
            className="block rounded-2xl bg-white px-4 py-3 font-bold text-[#2f3657] space-mono-regular"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}
