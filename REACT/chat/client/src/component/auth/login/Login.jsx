import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../../redux/slice/userLoginSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (formData.email === "" || formData.password === "") {
      alert("Please fill out both email and password fields.");
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password,
    };

    setIsLoading(true);

    try {
      const response = await dispatch(userLogin({ payload }));

      if (response.type === "login/fulfilled") {
        const { first_name, last_name, role, token } = response.payload.data;
        Cookies.set("token", token);
        Cookies.set("name", `${first_name} ${last_name}`);
        Cookies.set("role", role);
        if (role === "admin") {
          navigate("/dashboard");
        } else if (role === "user") {
          navigate("/");
        }
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login failed: ", error);
      alert("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-header">Login</div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <span>
          Don't want to <Link to="/register">Register?</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
