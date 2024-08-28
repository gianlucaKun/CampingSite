import React from "react";
import "./Info.scss";


const Info: React.FC = () => {
  return (
    <div>
      <div className="infoCaptionContainer">
        <h4>CAMPING & BUNGALOWS</h4>
        <h2>CAMPING ZAMPA</h2>
        <p>
          Tranquillo ed accogliente, tra le montagne e le verdi vallate, venite
          a riscoprire il contatto con una natura quasi incontaminata, la vita e
          le tradizioni del nostro territorio. Un'oasi di pace nel cuore del
          Parco Nazionale dello Stelvio, il giusto compromesso tra la vacanza di
          relax e l'avventura.
        </p>
      </div>
      <div className="infoContainer">
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/ristobar.svg"
            alt="Ristobar"
            className="infoLogo"
          />
          <h5 className="textLogo">RISTOBAR</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/minimarket.svg"
            alt="Mini Market"
            className="infoLogo"
          />
          <h5 className="textLogo">MINI MARKET</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/parco.svg"
            alt="Parco giochi"
            className="infoLogo"
          />
          <h5 className="textLogo">PARCO GIOCHI</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/barbecue.svg"
            alt="Barbecue"
            className="infoLogo"
          />
          <h5 className="textLogo">BARBECUE</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/bagni.svg"
            alt="Bagni privati"
            className="infoLogo"
          />
          <h5 className="textLogo">BAGNI PRIVATI</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/animali.svg"
            alt="Animali"
            className="infoLogo"
          />
          <h5 className="textLogo">ANIMALI</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/ricarica_auto.svg"
            alt="Bagni privati"
            className="infoLogo"
          />
          <h5 className="textLogo">RICARICA AUTO</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/ski_room.svg"
            alt="Barbecue"
            className="infoLogo"
          />
          <h5 className="textLogo">SKI ROOM</h5>
        </div>
        <div className="infoLogoContainer">
          <img
            src="https://www.valdisolecamping.it/_site/_img/_icon/accessibilita.svg"
            alt="Animali"
            className="infoLogo"
          />
          <h5 className="textLogo">ACCESSIBILITÀ</h5>
        </div>
      </div>
      <div>
        <div className="containerImgTentBungalow">
            <div className="tent"><div className="overBG"><button>scopri le piazzole</button></div></div>
            <div className="bungalow"><div className="overBG"><button>scopri i bungalow</button></div></div>
        </div>
      </div>
    </div>
  );
};

export default Info;
