import axios from "axios";
const API_URL = "REACT_APP_MY_SEVER_USER";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  getAllNote() {
    return axios.get(API_URL + "/all");
  }
}

export default new AuthService();
