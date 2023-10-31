import React from "react";
import style from "./About.module.css";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <h1 className={style.heading}>TELL US ABOUT YOURSELF</h1>
      <div className={style.content}>
        <div></div>
        <div className={style.profile}>
          <div className={style.headings}>
            <div className={style.nameHeading}>Your Name</div>
            <div className={style.phoneHeading}>Phone Number</div>
            <div className={style.dobHeading}>Your Birthday</div>
            <div className={style.genderHeading}>Your Gender</div>
          </div>
          <div className={style.details}>
            <div className={style.name}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className={style.phone}>
              <label htmlFor="phone">Contact Number</label>
              <input type="number" id="phone" placeholder="+91" />
            </div>
            <div className={style.dob}>
              <div className={style.dobInput}>
                <div className={style.dobDay}>
                  <label htmlFor="Day">Day</label>
                  <input
                    type="number"
                    placeholder="DD"
                    id="Day"
                    style={{
                      width: "4rem",
                      height: "2rem",
                      textAlign: "center",
                      borderRadius: "5px",
                      overflow: "hidden",
                    }}
                  />
                </div>
                <div className={style.dobMonth}>
                  <label htmlFor="Month">Month</label>
                  <input
                    type="number"
                    placeholder="MM"
                    id="Month"
                    style={{
                      width: "4rem",
                      height: "2rem",
                      textAlign: "center",
                    }}
                  />
                </div>
                <div className={style.dobYear}>
                  <label htmlFor="Year">Year</label>
                  <input
                    type="number"
                    placeholder="YYYY"
                    id="Year"
                    style={{
                      width: "4rem",
                      height: "2rem",
                      textAlign: "center",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={style.gender}>
              <div className={style.male}>
                <img src="bx-male.svg" alt="" />
                <h2>Male</h2>
              </div>
              <div className={style.female}>
                <img src="bx-female.svg" alt="" />
                <h2>Female</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={style.next} onClick={() => navigate("/touch")}>
          <img src="./next.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
