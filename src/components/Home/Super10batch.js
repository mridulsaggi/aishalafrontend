import React from "react";
// import img1 from "../../Images/Untitled (3).png"
// import img2 from "../../Images/robot 2.jpg"
import { Link } from "react-router-dom";

const Super10batch = () => {
  return (
    <>
      <div class="super_10">
        <h1>Super-10 Batch</h1>
      </div>
      <section class="super-10_container" id="super-10_container">
        <div class="second">
          <div class="second_img">
            <div class="imgb1"></div>
            <div class="imgb2"></div>

            <img class="imgb3" src="./Images/Untitled (3).png" alt="" />

            <img class="img_robo" src="./Images/robot 2.jpg" alt="robot" />
          </div>

          <div class="sec_text">
            <div class="sec_subtext">
              <h2>Why Super 10?</h2>
              <p>
                Get free Machine Learning training from mentors with Super-10,
                similar to Master's at IIT's/IIIT's. Prepare for top company
                interviews. Apply if eligible, with 8-10hrs/week commitment for
                at least 6 months.
              </p>
            </div>
            <div class="sec_subtext">
              <h2>How it benefits you...</h2>
              <p>
                This program offers comprehensive ML training for
                problem-solving, interview prep, regular performance
                evaluations, a recommendation letter, and a guaranteed job
                post-completion. Apply now to receive guidance from experienced
                mentors.
              </p>
            </div>
            <div class="sec_link">
              <Link to="./Super-10">Read more...</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Super10batch;
