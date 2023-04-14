import React, { Fragment } from "react";

class Contador extends React.Component {
  
  // Etapa de inicializacion de variables
  constructor (props) {
    super(props);
    this.state = { contador: 0 };
  }

  //Etapa de creacion de funciones necesarias
  plus() {
    this.setState({ contador: this.state.contador + 1});
  }

  minus() {
    this.setState({ contador: this.state.contador - 1});
  }

  // Etapa de renderizado 
  render() {
    return (
      <Fragment>
        <h1>CONTADOR: NUMERO {this.state.contador}</h1>
        <button onClick={()=> this.plus()}>SUMAR</button>
        <button onClick={()=> this.minus()}>RESTAR</button>
      </Fragment>
    )
  }
}


export default Contador;
