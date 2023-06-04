import React, { Fragment } from "react";

class GeneradorDePalabras extends React.Component {
  
  // Etapa de inicializacion de variables
  constructor (props) {
    super(props);
    this.state = { letter: "" };
  }

  //Etapa de creacion de funciones necesarias
  addWord(){
    let wordInput = document.querySelector(".wordInput");
    
    this.setState({letter: this.state.letter + " " + wordInput.value } );
  }

  // Etapa de renderizado 
  render() {
    return (
      <Fragment>
        <div className="container">
        <div className="cuadro">
        <h1>Programa que al mandar un texto genera la misma palabra y se puede enviar indefinidas veces.</h1>
        <h1>{this.state.letter}</h1>
        <input type="text" className="wordInput"/>
        <input type="button" value="Enviar Palabra" onClick={ () => this.addWord()}/>
        </div>
        </div>
      </Fragment>
    )
  }
}


export default GeneradorDePalabras;
