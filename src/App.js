import { React, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Home/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
// import Partners from './components/Home/Partners';
// import Super10batch from './components/Home/Super10batch';
import Home from "./components/Home/Home";
import Super10 from "./components/Super-10/Super10";
import Page from "./components/post/discuss/Page";
import Login from "./login/pages/login";
import Register from "./login/pages/Register";
import Buttons from "./components/buutons";
import Logout from "./login/pages/logout";
import { Context } from "./index.js";

function App() {
  // <<<<<<< HEAD
  const { isauthenticated, setisauthenticated } = useContext(Context);

  return (
    <>
      <Router>
        {isauthenticated ? <Logout /> : <Buttons />}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Super-10" element={<Super10 />} />
          <Route path="/page" element={<Page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
        <Toaster></Toaster>
      </Router>
    </>
  );
  // =======
  //   return "hello aishal";
  // >>>>>>> 84510adbb7cd073619544aaed2011ccaf65a3bdd
}

export default App;
