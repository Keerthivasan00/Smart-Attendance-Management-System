import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();

  const profileRef = useRef();
  const notifRef = useRef();

  // Load notifications for logged-in user
  useEffect(() => {
    const role = localStorage.getItem("role");
    const allRequests = JSON.parse(localStorage.getItem("leaveRequests")) || [];

    const myNotif = allRequests.filter((req) => req.sentTo === role);

    setNotifications(myNotif);
  }, []);

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
          width: 90px;
          height: auto;
          padding: 2px;
          margin-left:20px;
        }

        .relative{
          margin-right:20px;
        }

        .badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: red;
          color: white;
          padding: 2px 6px;
          border-radius: 50%;
          font-size: 12px;
        }
      `}</style>

      <div className="w-full bg-white shadow-md h-14 px-4 flex justify-between items-center">

        {/* Logo */}
        <img className="logo" src={logo1} alt="logo" />

        {/* Right Icons */}
        <div className="flex items-center gap-6 mr-20">

          {/* Notification Icon */}
          <div className="relative" ref={notifRef}>
            <FaBell
              className="text-2xl text-gray-700 cursor-pointer"
              onClick={() => setOpenNotif(!openNotif)}
            />

            {/* Badge - Notification Count */}
            {notifications.length > 0 && (
              <span className="badge">{notifications.length}</span>
            )}

            {/* Notification Dropdown */}
            {openNotif && (
              <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg p-3 z-50 max-h-72 overflow-y-auto">

                {notifications.length === 0 ? (
                  <p className="text-gray-500 text-center">No new notifications</p>
                ) : (
                  notifications.map((item) => (
                    <div key={item.id} className="p-2 border-b">
                      <p className="font-semibold">{item.applicantName}</p>
                      <p className="text-sm text-gray-600">
                        Requested leave ({item.fromDate} → {item.toDate})
                      </p>
                    </div>
                  ))
                )}

              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <FaUserCircle
              className="text-3xl text-gray-700 cursor-pointer "
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
