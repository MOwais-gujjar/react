import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return <div className=" bg-gray-400 text-3xl text-white p-4">User: {id} </div>;
};

export default User;
