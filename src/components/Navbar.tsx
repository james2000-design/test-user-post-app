import { useState } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Features/auth/authSlice";
import profile from "../assets/profile.png";

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="bg-black p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
      <div className="text-white font-bold">LOGO</div>
      <input
        className="w-64 bg-gray-800 text-white border-none px-4 py-2 rounded"
        placeholder="Search"
        type="search"
      />
      <div className="flex items-center gap-4 relative">
        <MdNotificationsNone className="text-white text-xl cursor-pointer" />
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="focus:outline-none"
          >
            <img
              src={profile}
              alt="profile"
              className=" cursor-pointer border border-transparent rounded-full "
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
