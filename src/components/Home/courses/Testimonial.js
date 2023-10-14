import React from "react";
import "./style.css"

const Testimonial = () => {
  return (
    <section class="testimonials">
      <div class="testi_flex">
        <div class="testi_box">
          <h3>AI-SHALA Stories</h3>
          <p>Hear it from our Students</p>
        </div>
        <div class="testi_container">
          <div class="testi_slider">
            <ul>
              <li>
                <div class="testi_content">
                  <p>
                    “The webinar was really interesting with a new topic of
                    application of Machine learning to be applied in Radars and
                    I am thankful for selecting a new and conventional session.”{" "}
                    <br /> <span>Akshayjit Podder - Student, Assam</span>
                  </p>
                </div>
              </li>

              <li>
                <div class="testi_content">
                  <p>
                    “It was very informative and very nice explanation. It
                    really helped me complete my work. Really thankful for this
                    webinar.” <br />
                    <span>Kavish Goyal - Data scientist</span>
                  </p>
                </div>
              </li>
              <li>
                <div class="testi_content">
                  <p>
                    "Very nice and interesting work by Anil sir . Looking
                    forward to gain more knowledge on AI.” <br />
                    <span>Samyak Kumar Sahoo - CSE Student</span>{" "}
                  </p>
                </div>
              </li>
              <li>
                <div class="testi_content">
                  <p>
                    “The coding parts were very interesting (the parts where we
                    can put color in faces was very cool).”
                    <br />
                    <span>Sharob Sinha – Student, Kolkata</span>{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
