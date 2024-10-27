import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{";
    for (let i = 1; i <= length; i++) {
      const rendom = Math.floor(Math.random() * str.length + 1);
      pass += str[rendom];
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

const passwordToClipboared = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password);
}, [password])

  useEffect( () => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className=" w-full h-full px-4 py-3 bg-gray-600">
      <div className="flex flex-col justify-center items-center px-4">
        <div className="flex flex-grow justify-center mx-4 my-2">
          <input
            type={password}
            value={password}
            className=" bg-slate-800 text-white py-3 px-2 focus-within:bg-slate-950"
            ref={passwordRef}
          />
          <button onClick={passwordToClipboared} className=" rounded bg-blue-500 p-4 ">copy</button>
        </div>
        <div className=" flex justify-center items-center gap-x-3">
          <div className="flex flex-grow justify-center mx-4 my-2">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>length: {length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberChecked"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label>numbers</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberChecked"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>char</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
