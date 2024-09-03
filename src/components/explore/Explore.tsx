import React from "react";
import "./Explore.scss";
const Explore: React.FC = () => {
  return (
    <>
      <div
        id="gestione-familiare"
        className="parallax"
        style={{
          backgroundImage: `url('https://www.valdisolecamping.it/_site/_img/fascia_campeggio_home_estate.jpg')`,
        }}
      >
        <div className="containerExplore">
          <div>
            <h3>GESTIONE FAMIGLIARE</h3>
            <h2>ESPLORA IL CAMPEGGIO</h2>
            <a href="#gestione-familiare">Scopri di più </a>
          </div>
        </div>
      </div>
      <div id="fascia-campeggio-stagione">
        <div>
          <div>
            <div>
              <p>
                <h4>CAMPEGGIO</h4>
              </p>

              <h2>SPECIALE IN OGNI STAGIONE</h2>

              <p>
                Vieni a scoprire il campeggio nei vari periodi dell'anno: in
                estate con le lunghe giornate da passare in quota e le notti
                stellate, in autunno col meraviglioso foliage e il suggestivo
                periodo del bramito del cervo, l'inverno con le bianche distese
                di neve e il divertimento e adrenalina sulle piste da sci e la
                primavera con il disgelo della neve e il risveglio della natura.
              </p>
              <a href="#fascia-campeggio-stagione">Campeggio in estate </a>
              <a href="#fascia-campeggio-stagione">Campeggio in inverno </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="oasi-nel-verde"
        className="parallax"
        style={{
          backgroundImage: `url('https://www.valdisolecamping.it/_site/_img/fascia_valdisole.jpg')`,
        }}
      >
        <div className="containerExplore">
          <div>
            <h3>OASI NEL VERDE</h3>
            <h2>SCOPRI LA VAL DI SOLE</h2>
            <a href="#oasi-nel-verde">Scopri di più </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
