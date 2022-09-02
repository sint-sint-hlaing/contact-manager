import React, { useState , useEffect } from "react";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";

const ViewContact = () => {

  const [data, setData] = useState("");
  const { id } = useParams()


  useEffect(() => {
    axios.get(`https://62c65bdc2b03e73a58cb8206.mockapi.io/contacts/${id}`).then((res) => {
        setData(res.data)
    })
}, [])

  return (
    <div className=" flex items-center flex-col gap-3 p-14 w-full">
    <img className=" w-32 h-32 md:w-48 md:h-48 rounded-full" src={data.img} alt="Profile" />
    <div className=" flex flex-col gap-5 my-3">
    <div className=" flex gap-4">
    <p>Name : </p>
    <p className="">{data.name}</p>
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
    <div className=" flex  gap-4">
    <p>Relationship : </p>
    <p>{data.relationship}</p>
    </div>
    </div>
    </div>
  )
}

export default ViewContact