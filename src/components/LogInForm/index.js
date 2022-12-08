import axios from "axios";
import React, { Component, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Style from "./styles.module.css";

const LogInForm = () => {
  const [logIn, setLogIn] = useState({ email: "", password: "" });
  const [cookies, setCookie] = useCookies(["name"]);

  const handelChange = (key, value) => {
    setLogIn({ ...logIn, [key]: value });
  };

  const handelClick = async () => {
    const response = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      logIn
    );
    console.log(response);
    setCookie("token", response.data.data.Token);
    setCookie("name", response.data.data.Name);
  };

  return (
    <div className={Style.form}>
      <div className={Style.container}>
        <div className={Style.row}>
          <img
            className={Style.logoImg}
            src="./assets/images/matter.jpg"
            alt="logo"
          />
        </div>
        <p className={Style.desc}>Sign in to your account please!</p>
        <div className={Style.column}>
          <label className={Style.inputLabel} htmlFor="inputEmail">
            email
          </label>
          <input
            className={Style.inputContent}
            value={logIn.email}
            id="inputEmail"
            type="email"
            placeholder="Enter email"
            onChange={(e) => handelChange("email", e.target.value)}
          />
        </div>
        <div className={Style.column}>
          <label className={Style.inputLabel} htmlFor="inputPass">
            Password
          </label>
          <input
            className={Style.inputContent}
            value={logIn.password}
            id="inputPass"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => handelChange("password", e.target.value)}
          />
        </div>
        <div className={Style.linkContainer}>
          <Link className={Style.link}>Forget password?</Link>
        </div>
        <Link className={Style.btn} onClick={handelClick}>
          Sign in
        </Link>
        <div className={Style.moveTo}>
          <span>Don't have an account?</span>
          {"  "}
          <Link className={Style.link}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
