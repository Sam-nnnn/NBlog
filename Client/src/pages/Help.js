import React, { useState } from "react";

const Help = (props) => {
  const currentUser = props;

  const [questionTilte, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");

  const changeQuestionTitle = (e) => {
    setQuestionTitle(e.target.value);
  };
  const changeQuestionText = (e) => {
    setQuestionText(e.target.value);
  };

  const sendEmail = () => {
    console.log(questionTilte, questionText, process.env.REACT_APP_MY_EMAIL);
    window.Email.send({
      SecureToken: "135456dc-445e-4388-8a4c-ffcd6c552b1b",
      To: currentUser.currentUser.user.email,
      From: process.env.REACT_APP_MY_EMAIL,
      Subject: questionTilte,
      Body: questionText,
    }).then((message) => alert(message));
  };

  return (
    <div className="help">
      <div className="helpInput">
        <h3>有什麼需要幫助的嗎?在下方告訴我，我將透過email聯絡您。</h3>
        <div className="titleAndText">
          <input
            onChange={changeQuestionTitle}
            placeholder="問題主旨"
            type="text"
          />
          <textarea
            onChange={changeQuestionText}
            placeholder="請描述您所遇到的問題"
          ></textarea>
        </div>
        <button onClick={sendEmail}>送出</button>
      </div>
    </div>
  );
};

export default Help;
