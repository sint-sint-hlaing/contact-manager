import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditContact = () => {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [img, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [birth, setBirthday] = useState("");
  const [relationship, setRelationship] = useState("");
  const { id } = useParams();

  const data = {
    name: name,
    img: img,
    email: email,
    phone: phone,
    job: job,
    birth: birth,
    relationship: relationship,
  };

  useEffect(() => {
    axios
      .get(`https://62c65bdc2b03e73a58cb8206.mockapi.io/contacts/${id}`)
      .then((res) => {
        setName(res.data.name);
        setImage(res.data.img);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setJob(res.data.job);
        setBirthday(res.data.birth);
        setRelationship(res.data.relationship);
      });
  }, []);

  let Update = (e) => {
    e.preventDefault();
    axios
      .put(`https://62c65bdc2b03e73a58cb8206.mockapi.io/contacts/${id}`, data)
      .then(() => navigate("/"));
  };

  return (
    <div className=" flex items-center flex-col gap-3 p-14">
      <h1 className=" text-2xl text-purple-700 my-3 font-medium">
        Edit Contact
      </h1>
      <div className=" flex flex-col gap-5 my-3">
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="">Name</label>
          <input
            placeholder="Enter name"
            className=" rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="">Image</label>
          <input
            placeholder="Enter image url"
            className=" rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            type="text"
            value={img}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="">Email</label>
          <input
            placeholder="Enter email"
            className=" rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="">Phone Number</label>
          <input
            placeholder="Enter phone number"
            className=" rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="">Job</label>
          <input
            placeholder="Enter Job"
            className=" rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="">Date ot Birth</label>
          <input
            placeholder="Enter birthday"
            className=" rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            type="date"
            value={birth}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>

        <div className=" flex flex-col md:flex-row justify-between gap-2 md:gap-4">
          <label for="relation" class="">
            Relationship
          </label>
          <select
            id="relation"
            class="rounded-md outline-none bg-inherit border-2 border-gray-400 px-3 py-1 w-full md:w-80"
            onChange={(e) => setRelationship(e.target.value)}
            value={relationship}
            defaultValue={"default"}
          >
            <option value="default">Choose a relationship</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="friend">Friend</option>
            <option value="partner">Partner</option>
            <option value="relative">Relative</option>
            <option value="sister">Sister</option>
            <option value="other">Other</option>
          </select>
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
        <button
          type="button"
          class=" my-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={Update}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditContact;
