import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route Component={LoginPage} path="/login"/>
          <Route element={<PrivateRoute />}>
            <Route Component={HomePage} path="/" exact />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
