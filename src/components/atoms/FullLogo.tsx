import React from "react";
import logo from "@/assets/img/logos/logo.svg"
import { Link } from "react-router";
const FullLogo = () => {
    return (
        <Link to={"/"}>
            <img src={logo} alt="logo" className="block" />
        </Link>
    );
};

export default FullLogo;
