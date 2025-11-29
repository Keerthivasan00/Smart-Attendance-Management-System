import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const navigate = useNavigate();

  const profileRef = useRef();
  const notifRef = useRef();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setOpenNotif(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        .logo {
          width: 100px;
          height: auto;
          padding: 5px;
        }
      `}</style>

      <div className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <img className="logo" src={logo1} alt="logo" />

        {/* Right Section Icons */}
        <div className="flex items-center gap-6 mr-20">

          {/* Notification Icon */}
          <div className="relative" ref={notifRef}>
            <FaBell
              className="text-3xl text-gray-700 cursor-pointer"
              onClick={() => setOpenNotif(!openNotif)}
            />

            {/* {openNotif && (
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-2 z-50">
                <h3 className="px-3 py-2 font-semibold border-b">Notifications</h3>

                <p className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
                  ✔ Leave Approved
                </p>

                <p className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
                  ✉ New Message From Admin
                </p>

                <p className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer">
                  📅 Attendance Report Available
                </p>
              </div>
            )} */}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <FaUserCircle
              className="text-4xl text-gray-700 cursor-pointer "
              onClick={() => setOpenProfile(!openProfile)}
            />

            {openProfile && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg rounded-lg p-2 z-50">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md"
                  onClick={() => navigate("/profile")}
                >
                  View Profile
                </button>

                <button
                  className="w-full text-left px-4 py-2 hover:bg-red-100 rounded-md text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
