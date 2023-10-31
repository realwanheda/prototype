import React from "react";
import style from "./Scan.module.css";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src="homebut.png" alt="" />
      </div>
      <div className={style.content}>
        <div className={style.steps}>
          <ul>
            <li>
              <img src="check.svg" alt="" />
              CONNECT STETHOSCOPE
            </li>
            <li>
              <img src="circle.svg" alt="" />
              PROCESSING AUDIO
            </li>
            <li>
              <img src="circle.svg" alt="" />
              CONDUCTING PCG ANALYSIS
            </li>
            <li>
              <img src="circle.svg" alt="" />
              PREPARING DIAGNOSIS
            </li>
            <li>
              <img src="circle.svg" alt="" />
              DIAGNOSIS READY, CLICK NEXT
            </li>
          </ul>
        </div>
        <div className={style.results}>
          <h1>PCG ANALYSIS IN Progress...</h1>
          <h2>Scanning...</h2>
          <div className={style.gif}>
            <img src="giphy.gif" alt="" />
          </div>
        </div>
      </div>
      <div className={style.button} onClick={() => navigate("/congrats")}>
        <button className={style.next}>Next</button>
      </div>
    </div>
  );
};

export default Scan;
