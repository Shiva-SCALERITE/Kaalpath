import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import { CopilotKit } from "@copilotkit/react-core";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Task = lazy(() => import("./Components/Task"));
const Home = lazy(() => import("./Components/Home"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <BrowserRouter>
        <CopilotKit publicApiKey="ck_pub_4c543cf4dda33c77d6362cfc3ee5af30">
          <Navbar
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}
              />
              <Route
                path="/about"
                element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>}
              />
              <Route
                path="/contact"
                element={<Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>}
              />
              <Route
                path="/login"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login setIsAuthenticated={setIsAuthenticated} />
                  </Suspense>
                }
              />
              <Route
                path="/task"
                element={
                  <ProtectedRoute>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Task />
                    </Suspense>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
        </CopilotKit>
      </BrowserRouter>
    </div>
  );
}

export default App;
