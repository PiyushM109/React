import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex h-20 justify-between drop-shadow-lg bg-pink-100 mb-2">
      <div className="logoContainer">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4"><Link  to={"/"}>Home</Link></li>
          <li className="px-4"><Link  to={"/about"}>About Us</Link></li>
          <li className="px-4"><Link  to={"/contact"}>Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
