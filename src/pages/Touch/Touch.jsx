import style from "./Touch.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Touch() {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.heading}>
        <div className={style.you}>YOU CAN SPEAK</div>
        <div className={style.mic}>
          <img src="/microphone.png" alt="" />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.robot}>
          <img src="/robot.png" alt="" />
        </div>
        <div style={{ display: "flex", gap: ".2rem" }}>
          <div className={style.hand}>
            <img src="/hand.png" alt="" />
          </div>
          <div className={style.touch}>TOUCH ANYWHERE AND START SPEAKING</div>
        </div>
      </div>
      <div className={style.button}>
        <button className={style.next} onClick={() => navigate("/scan")}>
          Get Results
        </button>
      </div>
    </>
  );
}
export default Touch;
