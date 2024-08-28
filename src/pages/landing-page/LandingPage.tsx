import React from 'react';
import './LandingPage.scss';
import LandingPageNavBar from '../../components/navbar/LandingPageNavBar';
import wp from '../../assets/wp.png'
import Info from '../../components/infos/Info';
const LandingPage: React.FC = () => {
  return (
    <>
    <div className='landingPage'>
      <img src={wp} alt="campingWallPAper" className='wallpaper'/>
      <div className="box-contenuto"><img src="https://www.valdisolecamping.it/_site/_img/logo.png" alt="Val di Sole Camping e Bungalows" className="img-fluid"/></div>
      
    </div>
    <LandingPageNavBar/>
    <main>
      <Info/>
    </main>
    </>
  );
}

export default LandingPage;
