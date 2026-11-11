import { useState, useEffect } from "react";

export function Timer({ isOpen, onClose, selectedMins, skillName }) {
  // Convert selected minutes into total seconds
  const [timeLeft, setTimeLeft] = useState((selectedMins || 45) * 60);
  const [isRunning, setIsRunning] = useState(true);

  // Reset time whenever the modal opens or selectedMins changes
  useEffect(() => {
    if (isOpen) {
      setTimeLeft((selectedMins || 45) * 60);
      setIsRunning(true);
    }
  }, [isOpen, selectedMins]);

  // Countdown effect
  useEffect(() => {
    let timer;
    if (isOpen && isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, isRunning, timeLeft]);

  if (!isOpen) return null;

  // Format seconds into MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#111111] text-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative border border-gray-800 flex flex-col items-center text-center space-y-6">
        
        {/* Session Info */}
        <div>
          <span className="text-xs uppercase tracking-widest text-[#ef5455] space-mono-regular">
            Active Session
          </span>
          <h2 className="text-2xl font-bold mt-1">
            {skillName ? skillName : "Focused Practice"}
          </h2>
        </div>

        {/* Dynamic Time Display Box */}
        <div className="w-48 h-48 rounded-full bg-white text-black flex flex-col items-center justify-center shadow-lg border border-gray-200 select-none">
          <span className="text-4xl font-extrabold tracking-tight space-mono-regular">
            {formattedTime}
          </span>
          <span className="text-xs text-gray-500 font-medium mt-1 space-mono-regular">
            Time Remaining
          </span>
        </div>

        {/* Controls: Pause / Resume & End Session */}
        <div className="w-full flex gap-3">
          <button 
            onClick={() => setIsRunning(!isRunning)}
            className="flex-1 bg-[#222222] hover:bg-[#333333] text-white transition-colors py-3.5 rounded-2xl font-semibold text-sm border border-gray-700 space-mono-regular"
          >
            {isRunning ? "Pause" : "Resume"}
          </button>
          
          <button 
            onClick={onClose} 
            className="flex-1 bg-white text-black hover:bg-gray-200 transition-colors py-3.5 rounded-2xl font-semibold text-sm shadow-md space-mono-regular"
          >
            End Session
          </button>
        </div>
      </div>
    </div>
  );
}