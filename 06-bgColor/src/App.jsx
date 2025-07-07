import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div
      className="w-full h-screen duration-300 transition-colors"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex justify-center px-4 bottom-12">
        <div className="flex gap-4 bg-white shadow-2xl px-3 py-3 rounded-2xl border border-gray-200">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
          >
            Green
          </button>

          <button
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-md transition transform active:scale-95"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
