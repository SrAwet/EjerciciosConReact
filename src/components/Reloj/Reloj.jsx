import React, { Fragment } from "react";

class Reloj extends React.Component {
  // ETAPA DE INICIALIZACION DE VARIABLES
  constructor(props) {
    super(props);
    this.dias = {
      Mon: "Lunes",
      Tue: "Martes",
      Wed: "Miercoles",
      Thu: "Jueves",
      Fri: "Viernes",
      Sat: "Sabado",
      Sun: "Domingo",
    };
    this.meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    this.state = { hour: 0, min: 0, seg: 0, firstTime: true };
  }

  // ETAPA DE CREACION DE FUNCIONES NECESARIAS

  componentDidMount() {
    if (this.state.firstTime) {
      let currentDate = new Date();
      this.setState({
        hour: currentDate.getHours(),
        min: currentDate.getMinutes(),
        seg: currentDate.getSeconds(),
        firstTime: false,
      });
    }
  }

  componentDidUpdate() {
    if (this.state.seg >= 60) {
      this.setState({ min: this.state.min + 1, seg: 0 });
      return;
    }

    if (this.state.min >= 60) {
      this.setState({ hour: this.state.hour + 1, min: 0 });
      return;
    }

    if (this.state.hour >= 24) {
      this.setState({ hour: 0, min: 0, seg: 0 });
      return;
    }

    setTimeout(() => {
      this.setState({ seg: this.state.seg + 1 });
    }, 1000);
  }

  fechaCompleta() {
    let fecha = new Date();
    let diaStr = this.dias[`${fecha.toDateString().slice(0, 3)}`];
    let mesSrt = this.meses[fecha.getMonth()];

    let elementoFinal = (
      <h2>
        {diaStr}, {fecha.getDate()} de {mesSrt} de {fecha.getFullYear()}
      </h2>
    );

    return elementoFinal;
  }

  // ETAPA DE RENDERIZADO
  render() {
    return (
      <Fragment>
        <div className="container">
        <div className="cuadro">
        <h1>Programa basico y simple de un reloj.</h1>
        <h3>HORA EXACTA</h3>
        <h1>{`${this.state.hour}:${this.state.min}:${this.state.seg}`}</h1>
        {this.fechaCompleta()}
        </div>
        </div>
      </Fragment>
    );
  }
}

export default Reloj;
