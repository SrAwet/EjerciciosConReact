import React, { Fragment } from "react";

class GeneradorDeTextos extends React.Component {
  
  // Etapa de inicializacion de variables
  constructor (props) {
    super(props);
    this.state = { letter: ""};
  }

  //Etapa de creacion de funciones necesarias
  addLetter(eventletter){
    this.setState({letter: eventletter} );
  }

  // Etapa de renderizado 
  render() {
    return (
      <Fragment>
        <div className="container">
        <div className="cuadro">
          <h1>Programa que al escribir un texto lo puedes ver reflejado al instante.</h1>
        <h1>{this.state.letter}</h1>
        <input type="text" onChange={ (evento) => this.addLetter(evento.target.value)}/>
        </div>
        </div>
      </Fragment>
    )
  }
}


export default GeneradorDeTextos;
