import React from "react";
// import log from "../Images/logo/footer-logo.png";
// import recentpro from "../Images/recent-project/recent_post1.jpg";
// import self from "../Images/recent-project/recent_post2.jpg";
// import pose from "../Images/recent-project/recent_post3.jpg";
const Footer = () => {
  return (
    <section class="footer" id="footer">
      <div class="ai">
        <img src="./Images/logo/footer-logo.png" alt="logo" width="140vw" />
        <p>
          AI-Shala is an ed-tech platform where students and working
          professional can learn skills essential to start a career in
          Artificial Intelligence.
        </p>
        <div class="footer_follow">
          <h3>Follow Us</h3>
          <div class="follow_links">
            <a href="https://www.youtube.com/channel/UCU9UeFcjp_2Oou2f-AyMScw">
              <i class="fa fa-youtube-play" style={{ color: "#fff" }}></i>
            </a>
            <a href="https://thinkai.quora.com/">
              <i class="fa fa-quora" style={{ color: "#fff" }}></i>
            </a>
            <a href="https://chat.whatsapp.com/KQVQYvlziNO43OFOFDuRxK">
              <i class="fa fa-whatsapp" style={{ color: "#fff" }}></i>
            </a>
            {/* <!-- <a href="https://t.me/think_ai"><i class="fa fa-telegram" style="color:#fff ;"></i></a> --> */}
            <a href="https://www.instagram.com/thinkml_ai/">
              <i class="fa fa-instagram" style={{ color: "#fff" }}></i>
            </a>
            <a href="https://www.linkedin.com/company/ai-shala/">
              <i class="fa fa-linkedin" style={{ color: "#fff" }}></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- <div class="quick">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Partners</a></li>
                <li><a href="#">Super-10 Batch</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Our Tutors</a></li>
                <li><a href="#">Testimonials</a></li>
            </ul>
        </div> --> */}
      <div class="project">
        <h3>Recent Projects</h3>
        <div class="project_flex">
          <div class="project_flexitem">
            <img src="./Images/recent-project/recent_post1.jpg" alt="img" />
            <h5>Blind Assistance</h5>
          </div>
          <div class="project_flexitem">
            <img src="./Images/recent-project/recent_post2.jpg" alt="img" />
            <h5>Object Detection for Self Driving Cars</h5>
          </div>
          <div class="project_flexitem">
            <img src="./Images/recent-project/recent_post3.jpg" alt="img" />
            <h5>Pose Detection</h5>
          </div>
        </div>
      </div>
      <div class="contact">
        <h3>Contact Us</h3>
        <div class="contact_flex">
          <div class="contact_item">
            {/* <!-- <i class="material-icons" style="color: #fff;">call</i> --> */}
            <i class="fa fa-phone" style={{ color: "#fff" }}></i>
            <h5>+91 9625 99 4840</h5>
          </div>
          <div class="contact_item" style={{ color: "#fff" }}>
            <i class="fa fa-envelope"></i>
            <h5>info@ai-shala.com</h5>
          </div>
          <div class="contact_item">
            <i class="fa fa-map-marker" style={{ color: "#fff" }}></i>
            <h5>
              C-25B, Bhagwati Garden (Extn), Uttam Nagar, New Delhi-110059,
              India
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
