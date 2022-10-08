import { useState, useEffect } from "react";
import palabras from "../Componentes/Json/palabras.json"
import Container from 'react-bootstrap/Container';

function Function() {
    const Aux = [];
    let cant_palabras = palabras.length;
    let valor_azar = Math.floor(Math.random() * cant_palabras)
    const [palabra, setPalabra] = useState(palabras[valor_azar]);
    console.log(palabra);
    let palabrita = Array.from(palabra);
    const [imagenJuego, setImagenJuego] = useState("..assets/img/0.jpg");
    const [letra, setLetra] = useState([Array(palabrita.length).fill("_ ")]);
    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    const [resultado, setResultado] = useState("");
   
    const click_letras = (event) => {
        let num = 0;
        const boton = event.target;
        boton.disabled = true;
        const letr = boton.innerHTML;
        let acerto = false;
        for (let i = 0; i < palabra.length; i++) {
            
                if (letr == palabra[i]) {
                    num++;
                    console.log(num);
                    acerto = true;
                    Aux[i] = letr + " ";
                    
                } 
                else {
                    Aux[i] = "_ ";
                }
            
        }
         
        setAciertos(aciertos + num);
        setLetra(Aux);
        console.log(Aux);
        if (acerto == false) {
            setErrores(errores + 1);
        }

        console.log("la letra " + letr + " en la palabra " + palabra + " existe? " + acerto);
    }

    useEffect(() => {
        setImagenJuego("../assets/img/" + errores + ".jpg");
        if (errores == 5) {
            setResultado("Perdiste: La palabra era " + palabra);
        }
        if (aciertos == palabra.length) {
            setResultado("Acertaste: La palabra era " + palabra);
        }
    }, [errores, aciertos])

    return (
        <Container>
            <h1>Ahorcadito </h1>
            <img src={imagenJuego} alt="ahorcado" />
            <div>
                <p>{letra}</p>
            </div>
            <div>
                <button onClick={click_letras}>A</button>
                <button onClick={click_letras}>B</button>
                <button onClick={click_letras}>C</button>
                <button onClick={click_letras}>D</button>
                <button onClick={click_letras}>E</button>
                <button onClick={click_letras}>F</button>
                <button onClick={click_letras}>G</button>
                <button onClick={click_letras}>H</button>
                <button onClick={click_letras}>I</button>
                <button onClick={click_letras}>J</button>
                <button onClick={click_letras}>K</button>
                <button onClick={click_letras}>L</button>
                <button onClick={click_letras}>M</button>
                <button onClick={click_letras}>N</button>
                <button onClick={click_letras}>Ñ</button>
                <button onClick={click_letras}>O</button>
                <button onClick={click_letras}>P</button>
                <button onClick={click_letras}>Q</button>
                <button onClick={click_letras}>R</button>
                <button onClick={click_letras}>S</button>
                <button onClick={click_letras}>T</button>
                <button onClick={click_letras}>U</button>
                <button onClick={click_letras}>V</button>
                <button onClick={click_letras}>W</button>
                <button onClick={click_letras}>X</button>
                <button onClick={click_letras}>Y</button>
                <button onClick={click_letras}>Z</button>
            </div>
            <p>{resultado}</p>
        </Container>
    );
}

export default Function;