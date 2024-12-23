import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRegister } from '../../../redux/slice/userRegisterSlice';  // Ensure this is a named export

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_no: "",
    address: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.first_name === "" ||
      formData.last_name === "" ||
      formData.phone_no === "" ||
      formData.address === ""
    ) {
      alert("Invalid Credentials");
      return;
    }

    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      phone_no: formData.phone,
      address: formData.address,
    };

    try {
      const response = await dispatch(userRegister({ payload }));
      if (response.type === 'register/fulfilled') {
        alert("User Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-header">Register</div>
        <div className="form-group">
          <label className="form-label">First name:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last name:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone NO:</label>
          <input
            type="tel"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            cols={21}
          />
        </div>
        <button type="submit" onClick={handleFormSubmit} className="submit-btn">Register</button>
      </div>
    </div>
  );
};

export default Register;
