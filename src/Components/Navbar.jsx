import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signOut } from "firebase/auth";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <>
      <div className="absolute m-0.5">
        <img src="/Logo.png" alt="Logo" className="h-15 w-20" />
      </div>
      <nav className="flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-3.5 px-10 shadow-lg">
        <div className="logo flex items-center">
          <span
            className="font-extrabold text-3xl tracking-wider ml-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="text-cyan-400">क</span>aal
            <span className="text-cyan-400">पथ</span>
          </span>
        </div>
        <ul className="flex gap-8 text-lg">
          <Link to="/">
            <li
              className="cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
            >
              Home
            </li>
          </Link>
          {isAuthenticated && (
            <Link to="task">
              <li
                className="cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
              >
                Your Tasks
              </li>
            </Link>
          )}
          <Link to="about">
            <li
              className="cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
            >
              About
            </li>
          </Link>
          <Link to="contact">
            <li
              className="cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
            >
              Contact
            </li>
          </Link>
          {isAuthenticated ? (
            <li
              onClick={handleLogout}
              className="cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
            >
              Logout
            </li>
          ) : (
            <Link to="login">
              <li
                className="cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "bold" }}
              >
                Login
              </li>
            </Link>
          )}
        </ul>
      </nav>
      <div className="h-0.5 bg-cyan-400"></div>
    </>
  );
};

export default Navbar;
