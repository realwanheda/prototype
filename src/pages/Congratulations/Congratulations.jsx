import React from "react";
import style from "./Congratulations.module.css";

const Congratulations = () => {
  const str = "Your Results are completely normal!";
  return (
    <div className={style.container}>
      <div className={style.heading}>PCG RESULTS</div>
      <h1>Congratulations</h1>
      <h2>{str.toUpperCase()}</h2>
      <img src="congratulations.png" alt="" />
    </div>
  );
};

export default Congratulations;
