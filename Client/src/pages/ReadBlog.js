import React, { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import NoteService from "../services/note.service";

const ReadBlog = (props) => {
  let { currentUser } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    AuthService.getAllNote()
      .then((data) => {
        setData(data.data);
      })
      .catch(() => {
        console.log("抱歉出現問題，找不到文章資料");
      });
  }, []);

  const setBGCAndDB = (e) => {
    if (e.target.style.color === "rgb(172, 172, 172)") {
      e.target.style.color = "#FF0000";
      NoteService.keepAddOrRemove(currentUser.user._id, e.target.id);
    } else {
      e.target.style.color = "#ACACAC";
      NoteService.keepAddOrRemove(currentUser.user._id, e.target.id);
    }
  };

  return (
    <div className="ReadBlog">
      {data && (
        <div className="totalNote">
          {data.map((note) => (
            <div key={note._id} className="note">
              <div className="noteNav">
                <div className="titleAndIcon">
                  {currentUser && (
                    <i
                      id={note._id}
                      style={
                        currentUser.user.keep.includes(note._id)
                          ? {
                              color: "red",
                            }
                          : {
                              color: "rgb(172, 172, 172)",
                            }
                      }
                      onClick={setBGCAndDB}
                      className="fa-sharp fa-solid fa-heart"
                    ></i>
                  )}
                  <h2 className="title">{note.title}</h2>
                </div>
                <p>上傳時間:{note.date}</p>
              </div>
              <h4>{note.text}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadBlog;
