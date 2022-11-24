import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="icon">
        <a href="/" className="github">
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="/" className="Line">
          <i className="fa-brands fa-line"></i>
        </a>

        <a href="/" className="phone">
          <i className="fa-solid fa-phone"></i>
        </a>

        <a href="/" className="email">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <div className="pages">
        <ul>
          <li>
            <a href="/self" className="footerSelfButton">
              <strong>個人經歷</strong>
            </a>
          </li>
          <li>
            <a href="/notes" className="footerBlogButton">
              <strong>筆記心得</strong>
            </a>
          </li>
          <li>
            <a href="/api" className="footerApiButton">
              <strong>API</strong>
            </a>
          </li>
          <li>
            <a href="/login" className="footerLoginButton">
              <strong>登入網站</strong>
            </a>
          </li>
        </ul>
      </div>
      <span>
        聯絡資訊：&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <br />
        &emsp;&emsp;電話：0900-000-000, 02-0000-0000 <br />
        &emsp;&emsp;信箱：a12345678@gmail.com
      </span>
      <hr />
      <h5>©版權所有，當您造訪本網站時即表示同意本網站相關規範</h5>
      <h5>任何問題歡迎來信，謝謝光臨</h5>
    </div>
  );
};

export default Footer;
