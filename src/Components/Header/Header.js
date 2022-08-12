import React from "react";
import logo from "../../assets/images/logo.png";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Form />
    </div>
  );
};
