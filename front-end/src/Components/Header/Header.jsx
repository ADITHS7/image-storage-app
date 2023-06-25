import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [menu, menuState] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/signin");
  };
  return (
    <>
      <div className="header">
        <div className="heading">
          <h1>
            <i class="fa-solid fa-cloud-arrow-down"></i> Image Store
          </h1>
        </div>
        <div className="user_dtls">
          <i
            onClick={() => {
              menu ? menuState(false) : menuState(true);
            }}
            class="fa-solid fa-user"
          ></i>
        </div>
      </div>
      {menu ? (
        <nav>
          <div className="log_box">
            <p>{user.name}</p>
            <Link onClick={logout} to="/signin">
              <i class="fa-solid fa-user"></i> Logout
            </Link>
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Header;
