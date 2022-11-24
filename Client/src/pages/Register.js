import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Register = () => {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  const ChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const ChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Register = () => {
    AuthService.register(username, email, password)
      .then((d) => {
        // send email
        window.alert("註冊成功，重新導向至登入畫面");
        window.Email.send({
          SecureToken: "135456dc-445e-4388-8a4c-ffcd6c552b1b",
          To: d.data.savedObject.email,
          From: process.env.REACT_APP_MY_EMAIL,
          Subject: "感謝您註冊本網站",
          Body: `${d.data.savedObject.username} 您好，有任何問題歡迎來信 >> nblog0205@gmail.com`,
        });
        navigate("/login");
      })
      .catch((error) => {
        setMessage(error.response.data);
      });
  };

  return (
    <div className="Register">
      {message && <div className="error">{message}</div>}
      <div className="RegisterInput">
        <label htmlFor="userNameRegister">
          使用者名稱：
          <input onChange={ChangeUsername} type="text" id="userNameRegister" />
        </label>
        <label htmlFor="emailRegister">
          電子信箱：
          <input onChange={ChangeEmail} type="text" id="emailRegister" />
        </label>
        <label htmlFor="passwordRegister">
          密碼：
          <input onChange={ChangePassword} type="text" id="passwordRegister" />
        </label>
      </div>
      <button onClick={Register}>Register</button>
    </div>
  );
};

export default Register;
