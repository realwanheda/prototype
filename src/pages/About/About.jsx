import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>TELL US ABOUT YOURSELF</h1>
      <div className={style.name}>
        <div className={style.nameHeading}>Your Name</div>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div className={style.phone}>
        <div className={style.phoneHeading}>Phone Number</div>
        <input type="number" placeholder="+91" />
      </div>
      <div className={style.dob}>
        <div className={style.nameHeading}>Your Birthday</div>
        <div className={style.dobInput}>
          <label htmlFor="Day">Day</label>
          <input
            type="number"
            placeholder="DD"
            style={{
              width: "4rem",
              height: "2rem",
              textAlign: "center",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          />
          <label htmlFor="Day">Month</label>
          <input
            type="number"
            placeholder="MM"
            style={{ width: "4rem", height: "2rem", textAlign: "center" }}
          />
          <label htmlFor="Day">Year</label>
          <input
            type="number"
            placeholder="YYYY"
            style={{ width: "4rem", height: "2rem", textAlign: "center" }}
          />
        </div>
      </div>
      <div className={style.gender}>
        <div className={style.genderHeading}>Your Gender</div>
        <div className={style.male}>
          <img src="bx-male.svg" alt="" />
          <div>Male</div>
        </div>
        <div className={style.female}>
          <img src="bx-female.svg" alt="" />
          <div>Female</div>
        </div>
      </div>
    </div>
  );
};

export default About;
