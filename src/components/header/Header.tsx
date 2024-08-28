import React from "react";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="containerHeader">
      <div className="containerInfo">
        <HamburgerMenu />
        
        <ul className="containerContact">
          <button className="btnBooking btnHeader">
            <FontAwesomeIcon icon={faCalendarDays} />
          </button>
          <button className="btnPhone btnHeader">
            <FontAwesomeIcon icon={faPhone} />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
