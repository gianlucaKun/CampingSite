import React from "react";
import './LandingPageNavBar.scss'

const LandingPageNavBar: React.FC = () => {
  return (
    <>
      <ul className="lpNavbar">
        <button className="borderRight"><h2>Scopri</h2><p>il campeggio</p></button>
        <button className="borderRight"><h2>Contatta</h2><p>il campeggio</p></button>
        <button><h2>Prenota</h2><p>il campeggio</p></button>
      </ul>
    </>
  );
};

export default LandingPageNavBar;
