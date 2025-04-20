import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Sign up logic
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully! Please log in.");
        setIsSignUp(false);
      } else {
        // Login logic
        await signInWithEmailAndPassword(auth, email, password);
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true"); // Persist login state
        navigate("/task"); // Redirect to Task component
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1
          className="text-3xl font-bold mb-4 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {isSignUp ? "Sign Up" : "Log In"} to Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label
              htmlFor="email"
              className="block text-cyan-300 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          <div className="form-group mb-4">
            <label
              htmlFor="password"
              className="block text-cyan-300 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-gray-900 font-bold py-2 px-4 rounded-full hover:bg-cyan-300 transition-all duration-300"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p
          className="text-center mt-4 cursor-pointer text-cyan-300"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already have an account? Log In"
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;