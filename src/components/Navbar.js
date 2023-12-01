import React from "react";
// import logo from "../Images/logo/footer-logo.png"
import "../style/style.css";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <div className="signBtn">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div> */}
      <header id="home" className="headerContainer">
        <Link to="/">
          <img
            class="logo"
            src="./Images/logo/footer-logo.png"
            alt="logo"
            width="150px"
          />
        </Link>

        <ul class="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li class="nav_project">
            <Link to="#">Projects</Link>
            <div class="sub_menu">
              <ul>
                <li>
                  <Link to="/">Blind Assistance</Link>{" "}
                </li>
                <li>
                  <Link to="/">Object Detection</Link>{" "}
                </li>
                <li>
                  <Link to="/">Pose Detection</Link>{" "}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/course">Course</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link class="nav_super" to="/Super-10">
              Super-10
            </Link>
          </li>
        </ul>

        <div class="mobile_nav_btn">
          {/* Nav bar icons are from ionicons.com  */}

          <ion-icon name="menu-outline" class="mobile_nav_icon"></ion-icon>
          <ion-icon name="close-outline" class="mobile_nav_icon"></ion-icon>
        </div>
      </header>
    </>
  );
};

export default Navbar;

// ../Super-10/index.html
// ../index.html
