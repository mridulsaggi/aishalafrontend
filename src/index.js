<<<<<<< HEAD
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createContext } from 'react';
// import App from './App';
import Navbar from './components/Navbar';
// import Front_content from './components/Python';
import "./style/style.css"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Main from './components/Home/Main';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
// import Partners from './components/Home/Partners';
// import Super10batch from './components/Home/Super10batch';
import Home from './components/Home/Home';
import Super10 from './components/Super-10/Super10';
import Page from './components/post/discuss/Page';
import Login from './login/pages/login';
import Register from './login/pages/Register';
import Buttons from './components/buutons';
import Logout from './login/pages/logout';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Router>
//     <Buttons/>
//     <Logout/>
//     <Navbar/>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/Super-10" element={<Super10/>}/>
//       <Route path="/page" element={<Page/>}/>
//       <Route path="/login" element={<Login/>}/>
//       <Route path="/register" element={<Register/>}/>

//     </Routes>
//     <Footer/>
//     <Toaster></Toaster>
//   </Router>
// );


export const Context =createContext({isauthenticated:false});
const Compi=()=>{
  const [isauthenticated,setisauthenticated]=useState(false);
  const [loading,setloading]=useState(false);
  const [user,setuser]=useState({});

  return(
  <Context.Provider value={{isauthenticated,setisauthenticated,user,setuser,loading,setloading}}>
    <App/>
  </Context.Provider>
  );
}
root.render(
  <React.StrictMode>
    <Compi/>
  </React.StrictMode>
);
=======
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
>>>>>>> 84510adbb7cd073619544aaed2011ccaf65
