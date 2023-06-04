import GeneradorDeTextos from "../components/GeneradorDeTextos/GeneradorDeTextos.jsx";
import Reloj from "../components/Reloj/Reloj.jsx";
import GeneradorDePalabras from "../components/GeneradorDePalabras/GeneradorDePalabras.jsx";
import Contador from "../components/Contador/Contador.js";
import "../views/Main.css";
const Main = () => {
  return (
    <>
      <body>
        <header>
          <h1>¡Bienvenido a mi proyecto de ejercicios!</h1>
        </header>

        <main>
          <div className="main-wrapper">
            <div className="contador-wrapper">
              <Contador />
            </div>
            <div className="generador-palabras-wrapper">
              <GeneradorDePalabras />  
            </div>
            <div className="generador-textos-wrapper">
            <GeneradorDeTextos />
            </div>
            <div className="reloj-wrapper">
            <Reloj />   
            </div>
            
          </div>
        </main>
      </body>
    </>
  );
};

export default Main;
