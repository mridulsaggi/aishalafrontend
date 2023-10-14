import React from "react";
// import  from "../../Images/brain.png";

const Main = () => {
  return (
    <section class="main">
      {/* <header id="home" class="header">
        <a href="./index.html">
          <img
            class="logo"
            src="./Images/logo/footer-logo.png"
            alt="logo"
            width="150px"
          />
        </a>

        <ul class="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li class="nav_project">
            <a href="#">Projects</a>
            <div class="sub_menu">
              <ul>
                <li>
                  <a href="#">Blind Assistance</a>
                </li>
                <li>
                  <a href="#">Object Detection</a>
                </li>
                <li>
                  <a href="#">Pose Detection</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#courses">Course</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
          <li>
            <a class="nav_super" href="./Super-10/index.html">
              Super-10
            </a>
          </li>
        </ul>

        <div class="mobile_nav_btn">
          <ion-icon name="menu-outline" class="mobile_nav_icon"></ion-icon>
          <ion-icon name="close-outline" class="mobile_nav_icon"></ion-icon>
        </div>
      </header> */}

      <div class="front">
        <div class="text">
          <h1>
            looking for career in <span>MACHINE LEARNING?</span>
          </h1>
        </div>
        <img class="brain" src="./brain.png" alt="img" />
      </div>

      <div class="cont_members">
        <div class="icon">
          <img src="./Images/icons/consultant.png" alt="img" />
          <h2 class="counter">15000+</h2>
          <p class="icon_text">Quora members</p>
        </div>

        <div class="icon">
          <img src="./Images/icons/open-book.png" alt="img" />
          <h2 class="counter">2000+</h2>
          <p class="icon_text">Students attended lectures</p>
        </div>
        <div class="icon">
          <img src="./Images/icons/community.png" alt="img" />
          <h2 class="counter">2700+</h2>
          <p class="icon_text">Community members</p>
        </div>
        <div class="icon">
          <img src="./Images/icons/graduation-cap.png" alt="img" />
          <h2 class="counter">20+</h2>
          <p class="icon_text">Expert Mentors</p>
        </div>
      </div>
    </section>
  );
};

export default Main;
