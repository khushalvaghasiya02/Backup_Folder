import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./component/auth/register/Register";
import Login from "./component/auth/login/Login";
import Home from "./component/User/home/Home";
import Cookies from "js-cookie";
import Dashboard from "./component/Admin/dashboard/Dashboard";

function App() {
  const role = Cookies.get("role");

  return (
    <div className="App">
      <Routes>
        {role === "" || role === undefined ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : role === "admin" ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </>
        ) : role === 'user' ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : <Route path="*" element={<Navigate to="/" replace />} />}
      </Routes>
    </div>
  );
}

export default App;
