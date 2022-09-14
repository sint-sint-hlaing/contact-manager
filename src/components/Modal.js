import React from "react";
import ReactDom from "react-dom";
import { ImCross } from "react-icons/im";

export default function Modal({ open, onClose, Delete }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className=" fixed inset-0 bg-black opacity-75 z-50" />
      <div className=" fixed top-2/4 left-2/4 z-50 -translate-x-2/4 -translate-y-2/4 bg-white p-10 pb-5 rounded-md flex justify-center items-center flex-col gap-5">
        <button
          className=" fixed top-2 right-2 p-2  text-zinc-500 hover:text-zinc-800"
          onClick={onClose}
        >
          <ImCross />
        </button>
        <p className=" text-center md:text-xl">
          Are you sure you want to delete this contact?
        </p>
        <div className=" flex gap-5 ">
          <button
            type="button"
            class=" my-2 focus:outline-none text-black border-2 border-black hover:text-white hover:bg-black duration-300 ease font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="button"
            class="my-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 "
            onClick={Delete}
          >
            Delete
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
