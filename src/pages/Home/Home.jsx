import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.touch}>TOUCH THE SCREEN</div>
      <div className={style.fastest}>FASTEST WAY TO DIAGNOSE YOURSELF</div>
      <div className={style.click}>CLICK HERE TO PROCEED</div>

      <div className={style.logoImage}>
        <img src="/logoooo.png" alt="" />
      </div>

      <div className={style.homeButtonImage}>
        <img src="/homebut.png" alt="" />
      </div>

      <div className={style.arrowImage}>
        <img src="/arrow.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
