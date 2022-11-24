import axios from "axios";
const API_URL = "REACT_APP_MY_SEVER_NOTE";

class NotesService {
  save(title, category, text) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, category, text },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  keepAddOrRemove(currentUserId, noteId) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL + "/update/keepAddOrRemove",
      { currentUserId, noteId },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new NotesService();
