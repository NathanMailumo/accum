import { App } from "../App";
import { useState } from "react";

export function Skills({ isOpen, onClose, isModalOpen }) {
  const [skillName, setSkillName] = useState("");
  const [selectedMins, setSelectedMins] = useState(45);

  if (!isOpen) return null;

  const totalTicks = 60;
  const activeTicksCount = Math.round((selectedMins / 90) * totalTicks);

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-[#111111] text-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative border border-gray-800 flex flex-col items-center">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors text-lg"
          >
            ✕
          </button>

          {/* Skill Input */}
          <div className="w-full mb-6">
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium space-mono-regular">
              Skill Name
            </label>
            <input
              type="text"
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Enter Skill e.g. Piano, Chess, Painting, ...."
              className="w-full bg-[#1e1e1e] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-all text-sm space-mono-regular"
            />
          </div>

          {/* Circular Dial Timer Component */}
          <div className="relative w-64 h-64 flex items-center justify-center my-2">
            {/* Tick Marks Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: totalTicks }).map((_, index) => {
                const angle = (index / totalTicks) * 360;
                const isActive = index < activeTicksCount;
                return (
                  <div
                    key={index}
                    className="absolute w-full h-full flex justify-center items-start pt-1"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div
                      className={`w-[2px] rounded-full transition-all duration-300 ${
                        isActive ? "h-3.5 bg-white" : "h-2.5 bg-gray-700/60"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Center Display Card */}
            <div className="w-44 h-44 rounded-full bg-white text-black flex flex-col items-center justify-center shadow-lg border border-gray-200 z-10 select-none">
              {/* Center Icon */}
              <div className="text-gray-700 mb-1">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>

              {/* Time Display */}
              <span className="text-4xl font-extrabold tracking-tight text-black space-mono-regular">
                {String(selectedMins).padStart(2, "0")}:00
              </span>
              <span className="text-xs text-gray-500 font-medium mt-1 space-mono-regular">
                Minutes Focus
              </span>
            </div>
          </div>

          {/* Range Slider to Adjust Time (0 to 90 mins) */}
          <div className="w-full mt-4 mb-6 px-2">
            <div className="flex justify-between text-xs text-gray-400 mb-2 space-mono-regular">
              <span>0m</span>
              <span>45m</span>
              <span>90m</span>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              value={selectedMins}
              onChange={(e) => setSelectedMins(Number(e.target.value))}
              className="w-full accent-white cursor-pointer bg-gray-800 h-1.5 rounded-lg appearance-none sapce-mono-regular"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={() => {
              /* Add timer start trigger logic here */
              onClose();
            }}
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors py-3.5 rounded-2xl font-semibold text-sm shadow-md space-mono-regular"
          >
            Start Counting
          </button>
        </div>
      </div>
      <App isOpen={isModalOpen} onClose={onClose} />
    </>
  );
}
