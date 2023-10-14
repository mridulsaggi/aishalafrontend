import React from 'react'
import "./style.css"
import img1 from "./wepik-export-20230430123343.jpeg";
import { Link } from 'react-router-dom';
const Super10 = () => {
    return (
        <div>
            <div class="front">
      <div class="front_content">
        <h1>Super-10</h1>
        <p>A free of cost training program to help you get a job in top-notch companies
        </p>
        <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfeIksveAYqt4OiPbn7SxvlTRTGkqGL-S60w26rD4wa-gXFOg/closedform'
          target="_blank">
          <button class="register">
            Enroll Now!
          </button>
        </Link>
      </div>
      <img class="front_img" src={img1} alt="img"/>

    </div>
            <section class="first">
                <div class="first_container">
                    <div class="overview_text">
                        <p>Super-10 program will help you get free
                            training from our mentors in machine learning. The program is designed to give you a similar
                            training as
                            given in a Master's program at IIT's and IIIT's. The program will also focus on preparing you for
                            the
                            interviews of top-notch companies working in this field.
                            In the Super-10 program, we will select 10 people who have excellent
                            programming skills but don't have access to required resources and good
                            mentorship to start a career in machine learning. <br />
                            <br />

                            In the program, we will give you training in machine learning from basics and
                            will help the student to clear the interview of top notch companies. The
                            program will be accessible to only those candidates who are dedicated and
                            passionate to deliver the quality work but lacking access to proper
                            mentorship in machine learning. <br />
                            <br />

                            Consider applying if you are eligible and available to devote 10 hours per
                            week for at least next 6 months.
                            <br />
                            <br />
                            After the program, you should be able to solve problems using machine learning. This will end up in
                            a
                            startup or a job in companies working in machine learning.
                        </p>
                    </div>
                    <div class="eligibility">
                        <h3>Eligibility Criteria :</h3>
                        <ol>
                            <li>You are available for at least 10 hrs per week for next 6 months.</li>
                            <li>You must have excellent programming skills</li>
                            <li>You are a team player.</li>
                            <li>Basic knowledge of machine learning is desired but not mandatory.</li>
                        </ol>
                    </div>
                    <div class="procedure">
                        <h3>Selection Procedure :</h3>
                        <ol>
                            <li>Apply for the program on our website.</li>
                            <li>Selection based on the application and resume (preference will be given to final year students or people
                                who are available for 10 hours per week for at least 6 months).</li>
                            <li>Agreement between AI-Shala and the selected candidates and submitting the security deposit [it will be
                                fully refunded when the candidate gets a job after the program].</li>
                            <li>Start working with the mentors.</li>
                        </ol>
                    </div>
                    <p>The program is 6 months long and there will be consistent supervision from your mentor and you will develop a
                        strong profile in these 6 months. Our training program is designed in a similar way as a Master's program in
                        IIT's and IIIT's. At the end of the program, you will also receive a letter of recommendation from your mentor
                        which will help you apply to top universities/companies all over the world.</p>
                    <div class="exposure">
                        <h3>You will get exposure to several modules in each month during the program :</h3>
                        <p>Month-1: You will learn how to approach and solve problems using machine learning <br />
                            Month-2: Special module on supervised learning <br />
                            Month-3: Special module on reinforcement learning <br />
                            Month-4: Special module on computer vision <br />
                            Month-5: Self paced project <br />
                            Month-6: Interview preparation</p>
                    </div>

                </div>


            </section>
        </div>
    )
}

export default Super10
