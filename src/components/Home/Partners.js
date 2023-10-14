import React from 'react'
import partner1 from "../../Images/partners/brze.png"
import partner2 from "../../Images/partners/cred_edge.png"
import partner3 from "../../Images/partners/fitbuddy_small.jpg"
import partner4 from "../../Images/partners/fitshaala.png" 
import partner5 from "../../Images/partners/tweek-labs_logo_dark_text.png"
import partner6 from "../../Images/partners/value3.png"
// import partner7 from "../../Images/partners/"
const Partners = () => {
  return (
    <section class="container_partners">
        <div class="partners_text">
            <h1>Our partners</h1>
        </div>
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src={partner1} height="80" width="" alt="img" />
                </div>
                <div class="slide">
                    <img src={partner2} height="80px" width="auto" alt="img" />
                </div>
                <div class="slide">
                    <img src={partner3} height="80px" width="auto" alt="img" />
                </div>
                <div class="slide">
                    <img src={partner4} height="80px" width="auto" alt="img" />
                </div>
                <div class="slide">
                    <img src={partner5} height="80px" width="auto" alt="img" />
                </div>
                {/* <div class="slide">
                    <img src={partner7} height="80px" width="auto" alt="img" />
                </div> */}
                <div class="slide">
                    <img src={partner6} height="80px" width="auto" alt="img" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Partners
