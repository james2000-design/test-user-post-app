import { useState } from "react";
import {
  FaChartBar,
  FaBoxOpen,
  FaTags,
  FaClipboardList,
  FaTruck,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Jumia from "../assets/img.jpg";
import { AiOutlinePlus } from "react-icons/ai";

export default function Sidebar() {
  const [active, setActive] = useState("Analytics");

  const menuItems = [
    { name: "Analytics", icon: <FaChartBar /> },
    { name: "Orders", icon: <FaClipboardList /> },
    { name: "Products", icon: <FaBoxOpen /> },
    { name: "Categories", icon: <MdCategory /> },
    { name: "Brands", icon: <FaTags /> },
    { name: "Refunds", icon: <FaTruck /> },
  ];

  return (
    <>
      {" "}
      <div className="w-[180px] sm:w-[200px]  min-h-screen fixed left-0 top-0 pt-16 z-10 overflow-y-auto mx-2 sm:mx-4 mt-3 sm:mt-10">
        <div>
          <div className="bg-white  rounded-lg shadow-md pb-2 px-1">
            <div className="flex items-center  p-2 bg-white rounded-lg shadow-md">
              <div className=" w-full flex justify-between items-center space-x-2 border-gray-200  border-b-[1.5px] pb-2">
                <span className="font-semibold text-[12px]">Your Store(s)</span>
                <button className="flex items-center space-x-1 cursor-pointer text-gray-600 text-[12px]  px-1 py-1 ">
                  <AiOutlinePlus className="border rounded" />
                  <span className="border-b-1 text-semibold text-[#a2a4a9]">
                    Add store
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-white rounded-lg shadow-md mt-2">
              <div className="flex items-center space-x-2">
                <img src={Jumia} alt="Jumia" width={28} height={28} />

                <span className="font-semibold">Jumia</span>
              </div>
              <button className="text-gray-600">...</button>
            </div>
            <button className="w-full mt-2 bg-gray-200 cursor-pointer py-2 rounded-md text-sm font-small">
              View Shop
            </button>
          </div>
          <div className="mt-4 bg-[#F5E8E9] p-2 rounded-lg">
            <h4 className="text-gray-500 text-[16px] text-left font-semibold mb-2 px-2">
              Menu
            </h4>
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`flex items-start space-x-2  py-2 px-2 rounded-lg cursor-pointer w-full ${
                  active === item.name
                    ? "bg-[#E0B7BB] text-black"
                    : "hover:bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActive(item.name)}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#F5E8E9] py-2 rounded-lg mt-4">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 text-gray-700">
            <FaHeadset />
            <span>Support</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 text-gray-700 relative">
            <FaCogs />
            <span>Configuration</span>
            <span className="w-2 h-2 bg-red-500 rounded-full absolute right-4 top-[1.1rem] "></span>
          </div>
        </div>
      </div>
    </>
  );
}
