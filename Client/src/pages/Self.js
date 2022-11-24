import React from "react";
import selfImg from "../img/S__9650182.jpg";
import HTMLCSSJSICON from "../img/HTMLCSSJSIcon.jpg";
import SCSSLOGO from "../img/ScssLogo.png";
import REACTLogo from "../img/react.png";
import Github from "../img/GitHub.png";

const Self = () => {
  return (
    <div className="self">
      <div className="aboutMe">
        <img src={selfImg} alt="self Img" />
        <div className="text">
          <h3>關於我</h3>
          <h5>
            我是一名大四的學生，就讀應用數學系，目前努力學習各項技術中，喜歡前端工程，也有了解一些後端及資料庫，目標是能夠成為做好前端也幫助後端的工程師。
          </h5>
        </div>
      </div>

      <div className="skills">
        <h3>技術三本柱</h3>
        <div className="icons">
          <img src={HTMLCSSJSICON} alt="html css js icon" />
        </div>
        <h3>常用技術</h3>
        <div className="strongestTotal">
          {/* 第一項 */}
          <div className="strongest">
            <img src={SCSSLOGO} alt="SCSS logo" />
            <h5>Scss</h5>
            <p>
              用於撰寫網頁渲染的樣式，使用巢狀結構來進行開法，比撰寫原始CSS更好理解，增加模組，減少重複的程式碼。
            </p>
          </div>
          {/* 第二項 */}
          <div className="strongest">
            <img src={REACTLogo} alt="REACT logo" />
            <h5>React</h5>
            <p>
              用於前端架構開發，撰寫眾多模組再串接成一個前端畫面，渲染出去。
            </p>
          </div>
          {/* 第三項 */}
          <div className="strongest">
            <img src={Github} alt="GitHub logo" />
            <h5>GitHub</h5>
            <p>透過Git進行專案的版本控制，再與GitHub結合，存儲Code於其中。</p>
          </div>
        </div>
        <hr />
        <h3>其他技術或概念</h3>
        <div className="other">
          <ul>
            <li className="header">前端</li>
            <li>BootStrap</li>
            <li>React-Router</li>
            <li>RWD</li>
            <li>DOM</li>
            <li>Restful API</li>
          </ul>
          <ul>
            <li className="header">後端</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Router</li>
            <li>Mongoose</li>
          </ul>
          <ul>
            <li className="header">其他</li>
            <li>git CI/CD</li>
            <li>PostMan</li>
            <li>Pupperteer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Self;
