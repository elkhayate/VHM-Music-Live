import style from "./app.module.css";
import goo from "./img/google.png"
import play from "./img/play.jpg";
import deez from "./img/deez.png";
import apple from "./img/apple.png";
import yout from "./img/yout.png";
import yan from "./img/yan.png";
import tidal from "./img/tidal.png";
import spo from "./img/spo.png";
import nap from "./img/nap.png";
function App() {
  return (
    <div className={style.container}>
     
      <div className={style.first}>
      <div className={style.items}>
        <h1>WHM Live Music</h1>
        <div className={style.item}>
          <div className={style.img}>
          <img src={goo} alt="google"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>

        </div>
        <div className={style.bet}></div>
        <div className={style.item}>
        <div className={style.img}>
          <img src={deez} alt="deezer"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>
        </div>
        <div className={style.bet}></div>
        <div className={style.item}>
        <div className={style.img}>
          <img src={apple} alt="apple"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>
        </div>
        <div className={style.bet}></div>
        <div className={style.item}>
        <div className={style.img}>
          <img src={yout} alt="youtube"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>
        </div>
      </div>
      </div>
      <div className={style.second}>
      <div className={style.items}>
        <h1>WHM Live Music</h1>
        <div className={style.item}>
          <div className={style.img}>
          <img src={yan} alt="yandex"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>

        </div>
        <div className={style.bet}></div>
        <div className={style.item}>
        <div className={style.img}>
          <img src={tidal} alt="tidal"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>
        </div>
        <div className={style.bet}></div>
        <div className={style.item}>
        <div className={style.img}>
          <img src={spo} alt="spotify"/>
          </div>
          <div className={style.play}>
              <img src={play} alt="play"/>
              <p>Play</p>
          </div>
        </div>
        <div className={style.bet}></div>
        <div className={style.item}>
        <div className={style.img}>
          <img src={nap} alt="youtube"/>
          </div>
          
          <div className={style.play}>
          <a href="https://www.w3schools.com"><img src={play} alt="play"/></a>
          <a href="https://www.w3schools.com"><p>Play</p></a>
          </div>
          
        </div>
      </div>
    
      </div>
      
    </div>

  );
}

export default App;
