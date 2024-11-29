import React from "react";
import img from "../assets/logo.png";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoSearchCircleOutline } from "react-icons/io5";
import { MdRecycling } from "react-icons/md";
import { RiLifebuoyLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SideBar() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="hidden sm:flex flex-col justify-between bg-slate-100 md:w-1/6 md:mx-2 min-h-screen">
      <div>
        <Link to="/" className="flex items-center ml-5">
          <img src={img} alt="" className="w-[10rem]" />
        </Link>
        <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col">
            <Link
              to={"/addnote"}
              className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer"
            >
              <IoMdAddCircleOutline />
              <span>Create Note</span>
            </Link>
            <label htmlFor="#search">
              <Link
                to={"/"}
                className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer"
              >
                <IoSearchCircleOutline />
                <span>Search Note</span>
              </Link>
            </label>
            <Link
              to={"/deletednote"}
              className="flex items-center gap-4 hover:bg-black hover:text-white p-2 pl-5 mx-4 justify-start my-1 rounded-md cursor-pointer"
            >
              <MdRecycling />
              <span>Deleted Notes</span>
            </Link>
          </div>
          <div>
            <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
            <div className="flex flex-col mt-4"></div>
          </div>
          <div>
            <div className="flex flex-col mt-4">
              <Link
                to="https://github.com/Subhamstar"
                target="_blank"
                className="flex items-center gap-4 text-gray-500 bg-slate-100 p-1 pl-[3.2rem] mx-4 justify-start rounded-md"
              >
                <RiLifebuoyLine />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mb-4 mx-4 p-4 bg-white rounded-lg shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <FaUserCircle className="text-3xl text-gray-600" />
          <div>
            <p className="font-medium">{user?.username}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2 justify-center mt-2 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100"
        >
          <BiLogOut />
          Logout
        </button>
      </div>
    </div>
  );
}

export default SideBar;