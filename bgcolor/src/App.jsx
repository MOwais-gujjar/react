import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ffff");

  return (
    <div
      className=" w-[1080px] h-[500px]"
      style={{ backgroundColor: color }}
    >
      <div className=" flex flex-wrap fixed justify-center bottom-12 px-5 inset-x-0">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white p-4 rounded-xl w-1/2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2"
            onClick={() => setColor("gray")}
          >
            gray
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
