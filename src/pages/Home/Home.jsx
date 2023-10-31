import style from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.homeButtonImage}>
        <img src="/homebut.png" alt="" />
      </div>
      <div className={style.content}>
        <div className={style.touch}>TOUCH THE SCREEN</div>
        <div className={style.logoImage}>
          <img src="/logoooo.png" alt="" />
        </div>
        <div className={style.fastest}>FASTEST WAY TO DIAGNOSE YOURSELF</div>
        <div className={style.click} onClick={(()=>navigate("/about"))}>
          CLICK HERE TO PROCEED <img src="arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
