import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = (props) => {
  const data = props.data;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-10 ">
      {data?.map((data) => (
        <div
          key={data.id}
          className=" bg-white flex flex-col justify-center items-center rounded-lg gap-2 py-5 hover:scale-105 ease-linear duration-300"
        >
          <img
            className="  w-32 h-32  rounded-full"
            src={data.img}
            alt="Profile Image"
          />
          <h2 className=" font-medium text-xl">{data.name}</h2>
          <p className=" text-purple-700">{data.job}</p>
          <div className=" flex gap-7">
            <Link to={`/view/${data.id}`}>
              <button className=" text-indigo-600 hover:text-indigo-800">
                <AiFillEye size="30" />
              </button>
            </Link>
            <Link to={`/edit/${data.id}`}>
              <button className=" text-green-600 hover:text-green-800">
                <FaUserEdit size="28" />
              </button>
            </Link>
            <button
              onClick={() => {
                props.Delete(data.id);
              }}
              className=" text-red-600 hover:text-red-800"
            >
              <AiTwotoneDelete size="28" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
