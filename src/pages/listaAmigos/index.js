import React, { Component } from "react";

import Api from "../../../src/services/api";
import Header from "../../components/header";
import Footer from "../../components/footer";

import "./style.css";

export default class Lista extends Component {
 
  state = {
    pessoas: [],
    pessoasOriginal: [],
    texto: "",
  };

  
  componentDidMount() {
   this.carregarAmigos();
  }

  
  async carregarAmigos() {
    let response = await Api.get("/?results=20");
    let listAmigos = response.data.results;
    
    let arrayAmigos = [];
    for (let amigos of listAmigos) {
        arrayAmigos.push({
        id: amigos.id,
        nome: amigos.name.first + " " + amigos.name.last,
        imageUrl: amigos.picture.medium,
        nat: amigos.nat,
        idade: amigos.dob.age,
      });
     
    }

    this.setState({
      pessoas: arrayAmigos,
      pessoasOriginal: arrayAmigos,
      texto: "",
    });
   
  }

  pesquisarAmigo = (event) => {
    event.preventDefault();
    let { pessoasOriginal, texto } = this.state;
    if (texto) {
      let pessoasPesquisadas = [];

      for (const pessoa of pessoasOriginal) {
        console.log(pessoa.nome);
        if (pessoa.nome.indexOf(texto) > -1) {
          pessoasPesquisadas.push(pessoa);
        }
      }
      this.setState({ pessoas: pessoasPesquisadas });
    } else {
      this.setState({ pessoas: pessoasOriginal });
    }
  };

  handlerChanged = (event) => {
    let { pessoasOriginal } = this.state;

    this.setState({ texto: event.target.value });
    if (!event.target.value) {
      this.setState({ pessoas: pessoasOriginal });
    }
  };

  render() {
    return (
      <div className="container-Header">
        <Header />

        <div className="fluid-container bg-white-and-flex">
          <br />
          <br />
          <div id="search-bar">
            <input
              type="text"
              id="texto"
              className="search"
              onChange={this.handlerChanged}
              placeholder="Pesquisar Amigos"
            />
            <button id="btn_pesquisa" onClick={this.pesquisarAmigo}>
                  Pesquisar
                </button>
                <div>
              
            </div>
          </div>
          <br />
          <br />
          <div className="post-amigos">
            <p className="amigos">Amigos</p>
          </div>
          {this.state.pessoas.map((item, index) => (
            <div className="caixa" key={index}>
              <img
                className="img-friends"
                src={item.imageUrl}
                alt={item.nome}
              />
              <div id="div-dados">
                <p id="nome">Username: {item.nome}</p>
                <br />
                <p id="idade">Idade: {item.idade}</p>
                <br />
                <p id="nacionalidade">Nacionalidade: {item.nat}</p>
                <br></br>
              </div>
              <div className="friend-button-status">
                <button>amigo</button>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
