import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import "./contact.scss";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

const { Option } = Select;
const Contact = () => {
  const countryStateCityData = {
    india: {
      states: {
        maharashtra: ["Mumbai", "Pune", "Nagpur"],
        gujarat: ["Ahmedabad", "Surat", "Vadodara"],
      },
    },
    usa: {
      states: {
        california: ["Los Angeles", "San Francisco", "San Diego"],
        texas: ["Houston", "Dallas", "Austin"],
      },
    },
    canada: {
      states: {
        ontario: ["Toronto", "Ottawa", "Mississauga"],
        quebec: ["Montreal", "Quebec City", "Laval"],
      },
    },
  };

  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const onFinish = (values) => {
    setFormData(values);
    message.success("Form submitted successfully!");
    console.log("Form Data:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    form.setFieldsValue({ state: undefined, city: undefined });
    setSelectedState(null);
  };

  const handleStateChange = (value) => {
    setSelectedState(value);
    form.setFieldsValue({ city: undefined });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="contact-main">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-form">
              <h2 className="contact-form-title">
                Get in <span>Touch</span>{" "}
              </h2>
              <Form
                form={form}
                name="enquiry_form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="contact-form-content"
              >
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Mobile No"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                    {
                      pattern: /^\d{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Select Country"
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country" },
                  ]}
                >
                  <Select
                    placeholder="Select a country"
                    onChange={handleCountryChange}
                  >
                    {Object.keys(countryStateCityData).map((country) => (
                      <Option key={country} value={country}>
                        {country.charAt(0).toUpperCase() + country.slice(1)}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Select State"
                  name="state"
                  rules={[
                    { required: true, message: "Please select your state" },
                  ]}
                  dependencies={["country"]}
                >
                  <Select
                    placeholder="Select a state"
                    onChange={handleStateChange}
                    disabled={!selectedCountry}
                  >
                    {selectedCountry &&
                      Object.keys(
                        countryStateCityData[selectedCountry].states
                      ).map((state) => (
                        <Option key={state} value={state}>
                          {state.charAt(0).toUpperCase() + state.slice(1)}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Select City"
                  name="city"
                  rules={[
                    { required: true, message: "Please select your city" },
                  ]}
                  dependencies={["state"]}
                >
                  <Select placeholder="Select a city" disabled={!selectedState}>
                    {selectedState &&
                      countryStateCityData[selectedCountry].states[
                        selectedState
                      ].map((city) => (
                        <Option key={city} value={city}>
                          {city}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Enquiry Details"
                  name="enquiryDetails"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your enquiry details",
                    },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button
                    type="default"
                    onClick={() => {
                      form.resetFields();
                      setFormData({});
                    }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </Form>

              <div className="contact-form-footer">
                <div className="form-footer-box">
                  <LuPhoneCall size={26}/>
                  <div className="box-content">
                    <p>Phone</p>
                    <a>111 111 111</a>
                  </div>
                </div>
                <div className="form-footer-box">
                  <IoMailOpenOutline size={30}/>
                  <div className="box-content">
                    <p>E-MAIL</p>
                    <a href="mailto:info@company.com" >info@company.com</a>
                  </div>
                </div>
                <div className="form-footer-box">
                  <IoIosHelpCircleOutline size={30}/>
                  <div className="box-content">
                    <p>HELPDESK</p>
                    <a href="mailto:www.abc.com" >www.abc.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-map">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41034.110481758085!2d77.65336259261838!3d13.019377531477337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1127362c7a41%3A0xd631c07f4cf40dc1!2s1st%20Cross%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723541301953!5m2!1sen!2sin"
                  width="100%"
                  height="800"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
