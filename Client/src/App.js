import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from "./services/auth.service";

// nav and footer
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// idnexAnimation and pages
import IndexAnimation from "./pages/IndexAnimation";
// Pages
import Self from "./pages/Self";
import NBlog from "./pages/NBlog";
import Api from "./pages/API";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  // login 判斷
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  console.log(document.location.origin);
  console.log(window.location.href);
  console.log();
  return (
    <div className="App">
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<IndexAnimation />} exact />
        <Route path="/self" element={<Self />} exact />
        <Route
          path="/notes"
          element={<NBlog currentUser={currentUser} />}
          exact
        />
        <Route path="/api" element={<Api />} exact />
        <Route
          path="/help"
          element={<Help currentUser={currentUser} />}
          exact
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
          exact
        />
        <Route path="/register" element={<Register />} exact />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
