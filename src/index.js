import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import "./style/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Home/Main";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Super10 from "./components/Super-10/Super10";
import Page from "./components/post/discuss/Page";
import Login from "./login/pages/login";
import Register from "./login/pages/Register";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Super-10" element={<Super10 />} />
      <Route path="/page" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
  </Router>
);
