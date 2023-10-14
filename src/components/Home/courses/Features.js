import React from "react";
import "./style.css"
import img1 from "./images/features/lecture.png"
import img2 from "./images/features/certificate.png"
import img3 from "./images/features/mentor.png"
const Features = () => {
  return (
    <section class="features">
      <h2>Our Unique Features</h2>
      <div class="features_container">
        <div class="features_card">
          <img src={img1} alt="" />
          <div class="features_card_txt">
            <h3>Live lectures with coding</h3>
            <p>Learn from our tutors live and interact for doubt clearance.</p>
          </div>
        </div>
        <div class="features_card">
          <img src={img2} alt="error" />
          <div class="features_card_txt">
            <h3>Certification with Internship Opportunity</h3>

            <p>
              Get certified and access partner organization internships/jobs
              with us.
            </p>
          </div>
        </div>
        <div class="features_card">
          <img src={img3} alt="" />
          <div class="features_card_txt">
            <h3>Expert Mentorship</h3>
            <p>Interact with expert tutors for doubt clearance and guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
