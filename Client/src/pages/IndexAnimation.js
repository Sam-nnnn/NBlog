import React from "react";
import { Link } from "react-router-dom";

const IndexAnimation = () => {
  return (
    <div className="animation">
      <div></div>

      <ul>
        <li>
          <Link to="/self">個人經歷</Link>
        </li>
        <li>
          <Link to="/notes">筆記心得</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
        <li>
          <Link to="/help">幫助中心</Link>
        </li>
        <li>
          <Link to="/login">登入網站</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexAnimation;
