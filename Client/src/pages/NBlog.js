import React, { useState } from "react";
import NotesService from "../services/note.service";
import ReadBlog from "./ReadBlog";

const NBlog = (props) => {
  let { currentUser } = props;

  let [title, setTitle] = useState("");
  let [category, setCategory] = useState("");
  let [text, setText] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const changeText = (e) => {
    setText(e.target.value);
  };

  const setNote = () => {
    NotesService.save(title, category, text).then((res) => {
      window.alert(res.data);
      window.location.reload();
    });
  };

  return (
    <div className="NBlog">
      {currentUser && currentUser.user.username === "小恩管理員" && (
        <div className="write">
          <div className="titleAndCategory">
            <label htmlFor="title">
              title:
              <input id="title" onChange={changeTitle} />
            </label>
            <label htmlFor="category">
              category:
              <input id="category" onChange={changeCategory} />
            </label>
          </div>
          <textarea onChange={changeText} id="textInput"></textarea>
          <button onClick={setNote}>submit</button>
        </div>
      )}

      <hr />

      <ReadBlog currentUser={currentUser} />
    </div>
  );
};

export default NBlog;
