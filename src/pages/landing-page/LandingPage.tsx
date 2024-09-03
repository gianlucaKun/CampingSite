import React from "react";
import "./LandingPage.scss";
import LandingPageNavBar from "../../components/navbar/LandingPageNavBar";
import wp from "../../assets/wp.png";
import Info from "../../components/infos/Info";
import Explore from "../../components/explore/Explore";
import Logo2 from "../../assets/logo2.png";
import Logo1 from "../../assets/logo.png";
const LandingPage: React.FC = () => {
  return (
    <>
      <div className="landingPage">
        <img src={wp} alt="campingWallPAper" className="wallpaper" />
        <div className="box-contenuto">
          <img
            src={Logo2}
            alt="image Camping e Bungalows"
            className="img-fluid"
          />
          <img src={Logo1} alt="Camping e Bungalows" />
        </div>
      </div>
      <LandingPageNavBar />
      <main>
        <Info />
      </main>
      <Explore />
    </>
  );
};

export default LandingPage;
