import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import { useScript, appleAuthHelpers } from 'react-apple-signin-auth';
import Apple from "./Apple";
import Reg from "./Reg";
import Signup from "./Signup";

function App() {
  useScript(appleAuthHelpers.APPLE_SCRIPT_SRC);
  return (
    <> <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Signup />} />
      <Route path="/reg" element={<Reg />} />
    </Routes>
    {/* <Apple /> */}
      <Reg /></>
  );
}

export default App;
