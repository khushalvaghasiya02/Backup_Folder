const moment = require("moment");
const config = require("../config/config");
const { userService, emailService } = require("../services");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ejs = require("ejs");
const path = require("path");

const register = async (req, res) => {
  try {
    const { email, password, role, first_name, last_name } = req.body;

    const userExists = await userService.getUserByEmail(email);
    if (userExists) {
      throw new Error("User already exists with this email!");
    }

    const hashPassword = await bcrypt.hash(password, 8);
    req.body.password = hashPassword;

    const options = {
      email,
      role,
      exp: moment().add(1, "days").unix(),
    };
    const token = await jwt.sign(options, config.jwt.secret_key);
    req.body.token = token;

    const user = await userService.createUser(req.body);
    if (!user) {
      throw new Error("User creation failed, please try again later.");
    }

    const otp = ("0".repeat(4) + Math.floor(Math.random() * 10 ** 4)).slice(-4);
    ejs.renderFile(
      path.join(__dirname, "../views/otp-template.ejs"),
      { email, otp, first_name, last_name },
      async (err, data) => {
        if (err) {
          await userService.deleteUserByEmail(email);
          return res.status(500).json({
            success: false,
            message: "Error sending email, please try again.",
          });
        }

        await emailService.sendMail(email, data, "Verify Email");
      }
    );

    res.status(200).json({
      success: true,
      message:
        "User registered successfully! Please check your email to verify.",
      data: { user },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await userService.findUserByEmail({ email });
    if (!findUser) throw Error("User not found");

    const successPassword = await bcrypt.compare(password, findUser.password);
    if (!successPassword) throw Error("Incorrect password");

    let option = {
      email,
      role: findUser.role,
      exp: moment().add(1, "days").unix(),
    };

    let token;
    if (findUser && successPassword) {
      token = await jwt.sign(option, config.jwt.secret_key);
    }
    let data;
    if (token) {
      data = await userService.findUserAndUpdate(findUser._id, token);
    }

    res.status(200).json({
      success: true,
      message: "User login successfully!",
      data: { data },
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

/** Send mail to requsted email */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  register,
  login,
  sendMail,
};
