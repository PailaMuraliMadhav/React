import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-screen h-screen duration-300 transition-colors"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center bottom-12 px-4 w-full">
        <div className="flex gap-4 bg-white shadow-2xl px-3 py-3 rounded-2xl border border-gray-200">
          <button
            onClick={() => setColor("red")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
