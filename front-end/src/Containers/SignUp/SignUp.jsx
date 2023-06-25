import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const [data, setData] = useState({
    name: "",
    emailId: "",
    password: "",
  });
  const sendData = (e) => {
    e.preventDefault();

    if (!data.emailId || !data.name || !data.password) {
      setError(true);
      return false;
    }

    axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signup">
      <div className="signup_left">
        <div className="signup_left_container">
          <div className="img_logo">
            <i class="fa-solid fa-cloud-arrow-down"></i>
          </div>
          <h1> Image Store </h1>
        </div>
      </div>
      <div className="signup_right">
        <div className="signup_right_container">
          <h1>Create Account</h1>
          <div className="social_links">
            <button>
              <i class="fa-brands fa-facebook-f"></i>
            </button>
            <button>
              <i class="fa-brands fa-instagram"></i>
            </button>
            <button>
              <i class="fa-brands fa-google"></i>
            </button>
          </div>
          <div></div>
          <div className="signup_form">
            <input
              type="text"
              placeholder="Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            {error && !data.name && (
              <span className="invalid_input">Enter valid name</span>
            )}
            <input
              type="text"
              placeholder="Email Id"
              value={data.emailId}
              onChange={(e) => setData({ ...data, emailId: e.target.value })}
            />
            {error && !data.emailId && (
              <span className="invalid_input">Enter valid E mail Id</span>
            )}
            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {error && !data.password && (
              <span className="invalid_input">Enter valid password</span>
            )}
            <button
              onClick={(e) => {
                sendData(e);
              }}
            >
              SIGN UP
            </button>
            <p>
              Existing user? <a href="/signin">SIGN IN</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
