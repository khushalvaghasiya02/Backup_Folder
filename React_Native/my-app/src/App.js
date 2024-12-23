import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Login from "./Component/Login";
import { useScript, appleAuthHelpers } from 'react-apple-signin-auth';

function App() {
  useScript(appleAuthHelpers.APPLE_SCRIPT_SRC);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;


