import React, { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdPersonAddAlt1 } from "react-icons/md";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();

  const loadData = () => {
    axios.get("http://localhost:3500/contacts").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const Delete = (id) => {
    axios.delete(`http://localhost:3500/contacts/${id}`).then(() => {
      loadData();
    });
  };

  return (
    <div className="p-5 md:p-10">
      <h1 className=" text-center text-purple-700 font-semibold text-xl md:text-3xl mb-3">
        Contact Manager
      </h1>
      <div className=" flex justify-between items-center gap-2 my-10">
        <div className="bg-white flex items-center justify-between w-full md:w-1/3 shadow-md ">
          <input
            className=" w-full p-2 md:py-3 md:px-5 outline-none text-md "
            type="text"
            placeholder="Search contacts..."
          />
          <button className="text-purple-700 rounded-md w-14 h-12 md:h-14 flex justify-center items-center duration-300 ease-in hover:text-white hover:bg-purple-700">
            <BiSearchAlt2 size="30" />
          </button>
        </div>
        <Link to="/add">
          <button className="text-purple-700 border-2 border-purple-700 rounded-md w-14 h-12 md:h-14 flex justify-center items-center duration-300 ease-in hover:text-white hover:bg-purple-700">
            <MdPersonAddAlt1 size="30" />
          </button>
        </Link>
      </div>
      <Card data={data} Delete={Delete} />
    </div>
  );
};

export default Home;
