import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";

const Nav = (props) => {
  let { currentUser, setCurrentUser } = props;
  const [isClick, setIsClick] = useState("unexist");
  const inputRef = useRef();

  const clickSearch = async (e) => {
    e.preventDefault();
    if (isClick === "unexist") {
      await setIsClick("exist");
      inputRef.current.focus();
    } else {
      setIsClick("unexist");
    }
  };
  const Logout = () => {
    AuthService.logout();
    window.alert("您已經登出，重新導向到首頁");
    setCurrentUser(null);
    // useNavigate("/self");
  };

  return (
    <div className="Nav">
      <div className="navPages">
        <h1>N.Blog</h1>
        <Link to="/self">個人經歷</Link>
        <Link to="/notes">筆記心得</Link>
        <Link to="/api">API</Link>
        {currentUser && <Link to="/help">幫助中心</Link>}

        {!currentUser && <Link to="/login">登入網站</Link>}
        {currentUser && (
          <Link onClick={Logout} to="/self">
            登出網站
          </Link>
        )}
      </div>
      <div className="search">
        <input
          type="text"
          id="searchInput"
          className={isClick === "exist" ? "exist" : "unexist"}
          ref={inputRef}
        />
        <Link to="/search" onClick={clickSearch} className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
