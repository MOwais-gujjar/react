import React, { useEffect, useState } from "react";
import { Await } from "react-router-dom";

const Github = () => {
  const [data, setData] = useState([]);
  const [val, setVal] = useState("");

  useEffect(() => {
    async function fetchFunc() {
      try {
        const response = await fetch(`https://api.github.com/users/${val}`);
        if (!response.ok) {
          console.log("Response is not good", response.statusText);
        }
        const res = response.json().then((res) => setData(res));
        return res;
      } catch (error) {
        console.log(error);
      }
    }
    fetchFunc();
  }, []);

  const searchData = (e) => {
    e.preventdefault();
    setData(val);
  }

  return (
    <div className=" bg-gray-500 text-3xl text-white p-5 m-2 rounded-lg">
      <div className=" my-2 px-2 flex items-center gap-x-3 justify-center bg-slate-50/5 p-3">
        <input
          className=" placeholder:text-lg text-white bg-gray-600 p-3 border rounded-lg active:bg-gray-700 focus-within:bg-gray-700"
          type="text"
          placeholder="Enter Github Profile name... "
          onChange={(e) => setVal(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => searchData}
          className=" bg-green-600 px-4 py-2 rounded-xl text-gray-100"
        >
          search
        </button>
      </div>
      <div className="flex items-center justify-around p-4 my-4">
        {val && (
          <>
            <h1>Github Followers: {data.followers}</h1>
            <img
              src={data.avatar_url}
              alt="github profile"
              width={300}
              height={300}
              className=" bg-slate-500 rounded-xl "
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Github;
