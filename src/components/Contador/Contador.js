import React, { Fragment } from "react";
import './/Contador.css';

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
        <div className="container">
        <div className="cuadro">
          <h1>Programa para contar numeros o restarlos al dar click a los botones:</h1>
        <h1>Contador: NUMERO {this.state.contador}</h1>
        <button onClick={()=> this.plus()}>SUMAR</button>
        <button onClick={()=> this.minus()}>RESTAR</button>
        </div>
      </div>

      </Fragment>
      
    )
  }
}


export default Contador;