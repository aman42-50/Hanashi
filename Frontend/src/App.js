import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Feed from "./pages/Feed";
import Explore from "./pages/Explore";
import PrivateRoute from "./utils/PrivateRoute";
import Profile from "./pages/Profile";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route Component={Test} path="/test" />
          <Route Component={LoginPage} path="/login" />
          <Route Component={RegisterPage} path="/register" />
          <Route element={<PrivateRoute />}>
            <Route Component={HomePage} path="/">
              <Route Component={Feed} path="" exact />
              <Route Component={Explore} path="explore" />
              <Route Component={Profile} path="profile" />
            </Route>
          </Route>
          <Route Component={Test} path="test" />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
