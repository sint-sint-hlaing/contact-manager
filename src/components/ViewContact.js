import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewContact = () => {
  const [data, setData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://62c65bdc2b03e73a58cb8206.mockapi.io/contacts/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className=" flex items-center flex-col gap-3 p-14 w-full ">
      <div className=" flex items-center flex-col gap-5 rounded-md p-5 md:p-10 md:bg-white ">
        <img
          className=" w-32 h-32 md:w-48 md:h-48 rounded-full"
          src={data.img}
          alt="Profile"
        />
        <div className=" flex flex-col gap-5 my-3">
          <div className=" flex gap-4">
            {/* <p>Name : </p> */}
            <p className=" text-center w-full font-semibold text-xl text-purple-800">
              {data.name}
            </p>
          </div>
          <div className=" flex gap-4">
            <p>Email : </p>
            <p>{data.email}</p>
          </div>
          <div className=" flex  gap-4">
            <p>Phone Number : </p>
            <p>{data.phone}</p>
          </div>
          <div className=" flex gap-4">
            <p>Job : </p>
            <p>{data.job}</p>
          </div>
          <div className=" flex gap-4">
            <p>Date of Birth : </p>
            <p>{data.birth}</p>
          </div>
          <div className=" flex  gap-4">
            <p>Relationship : </p>
            <p>{data.relationship}</p>
          </div>
        </div>
        <div className=" flex gap-5">
          <Link to="/">
            <button
              type="button"
              class=" my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick=""
            >
              Cancel
            </button>
          </Link>
          <Link to={`/edit/${data.id}`}>
            <button
              type="button"
              class=" my-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewContact;
