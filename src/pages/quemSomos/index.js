import React, { Component } from "react";

import Html5 from "../../assets/img/html5.png";
import Css3 from "../../assets/img/css-3.png";
import javaScript from "../../assets/img/javaScript.png";
import react from "../../assets/img/react.png";
import Edesildo from "../../assets/img/edesildo.jpeg";
import Iara from "../../assets/img/iara.jpeg";
import Gabriel from "../../assets/img/gabriel.jpeg";
import Jessica from "../../assets/img/jessica.jpeg";
import Design from "../../assets/img/design.png";
import Curriculo from "../../assets/img/curriculo.png";
import Api from "../../assets/img/api-rest.jpeg";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./style.css";

export default class Perfil extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="header-wrap">
          <div className="header-highlight fluid-container">
            <div className="box">
              <h1>Conheça o time de Desenvolvedores</h1>
              <p className="paragrafo">Sejam todxs bem vindxs!!!</p>
            </div>
            <div className="box">
              {" "}
              <img id="foto1" alt="imagem de fundo" src={Design} />
            </div>
          </div>
        </div>
        <div className="fluid-container">
          <main className="cursos">
            <div className="caixa1-2">
              <div className="caixa1 none">
                <div className="texto1" />
              </div>
              <div className="caixa2">
                <div className="texto2">
                  <h3>Tecnologias utilizadas</h3>
                </div>
              </div>
            </div>
            <section className="caixa3-4-5-6-7">
              <div className="caixa3 caixaN">
                <div className="icon1">
                  <img className="iconi" src={Html5} alt="icone html5" />
                  <h3>HTML</h3>
                </div>
              </div>
              <div className="caixa4 caixaN">
                <div className="icon1">
                  <img className="iconi" src={Css3} alt=" icone Css3" />
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="caixa5 caixaN">
                <div className="icon1">
                  <img
                    className="iconi"
                    src={javaScript}
                    alt="icone Java-Script"
                  />
                  <h3>JAVA_SCRIPT</h3>
                </div>
              </div>
              <div className="caixa6 caixaN">
                <div className="icon1">
                  <img className="iconi" src={react} alt=" icone react" />
                  <h3>REACT</h3>
                </div>
              </div>
              <div className="caixa7 caixaN">
                <div className="icon1">
                  <img className="iconi" src={Api} alt="icone Api-Rest" />
                  <h3>API REST</h3>
                </div>
              </div>
            </section>
          </main>

          <section id="sobreMim">
            <div className="user1 user">
              <img id="foto" src={Edesildo} alt="Desenvolvedor Edesildo" />

              <a target="_black" href="https://edesildocurriculo.000webhostapp.com/">
                <img className="cv" src={Curriculo} alt="Curriculo" />
              </a>
            </div>

            <div className="user2 user">
              <img id="foto" src={Iara} alt="Desenvolvedor Iara" />

              <a
                target="_black"
                href="https://curriculoiara2020.000webhostapp.com/"
              >
                <img className="cv" src={Curriculo} alt="Curriculo" />
              </a>
            </div>

            <div className="user3 user">
              <img id="foto" src={Gabriel} alt="Desenvolvedor Gabriel" />

              <a
                target="_black"
                href="https://curriculogabriel20.000webhostapp.com/"
              >
                <img className="cv" src={Curriculo} alt="Curriculo" />
              </a>
            </div>
            <div className="user4 user">

             
              <img id="foto" src={Jessica} alt="Desenvolvedor Jessica" />

              <a target="_black" href="https://curriculojessicatavares.000webhostapp.com/">
                <img className="cv" src={Curriculo} alt="Curriculo" />
              </a>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    );
  }
}