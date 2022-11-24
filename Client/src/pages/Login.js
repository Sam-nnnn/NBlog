import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Login = (props) => {
  let { setCurrentUser } = props;
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const ChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Login = () => {
    AuthService.login(email, password)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
        setCurrentUser(AuthService.getCurrentUser());
        navigate("/self");
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  };

  return (
    <div className="login">
      {message && <div className="error">{message}</div>}
      <div className="loginInput">
        <input placeholder="電子信箱" onChange={ChangeEmail} type="text" />
        <input placeholder="密碼" onChange={ChangePassword} type="password" />
        <button onClick={Login}>login</button>
        <Link to="/register">還沒有帳號?註冊一個吧</Link>
      </div>
    </div>
  );
};

export default Login;
