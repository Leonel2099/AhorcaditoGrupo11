import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button"
import abc from "../json/abecedario.json"
import dic from "../json/palabras.json"

export default function Funcion() {
    const btn_letras = document.querySelectorAll("#botones")
    const [num, setNum] = useState(0);
    const palabra = Array.from(dic[num].word) //seleciona una palbara del diccionario
    const [arrayPalabra, setArrayPalabra] = useState([]);
    const [palabraAdivinar, setPalabraAdivinar] = useState("")
    const [play, setPlay] = useState(false)
    const [errores, setErrores] = useState(0);
    const [aciertos, setAciertos] = useState(0);

    const habilitar = () => {
        for (let i = 0; i < btn_letras.length; i++) {
            btn_letras[i].disabled = false;
        }
    }
    const desHabilitar = () => {
        for (let i = 0; i < btn_letras.length; i++) {
            btn_letras[i].disabled = true;
        }
    }
    const letraOk = (event) => {
        let num = 0;
        let acerto = false;
        const boton = event.target;
        boton.disabled = true;
        const letraClick = boton.innerHTML;
        palabra.map((letra, i) => {
            if (letra === letraClick) {
                num++;
                acerto = true;
                arrayPalabra[i] = letra;
                setArrayPalabra((prev) => [...prev])
            }
        })
        setAciertos(aciertos + num)
        if (acerto == false) {
            setErrores(errores + 1);
        }

        console.log(errores, aciertos)
    }

    if (play) {
        return (
            <div>
                <Button onClick={restart}>Reiniciar</Button>
                <figure>
                    <img src={imagen} height="100" width="100" />
                </figure>
                <h1>{errores+"/5 Letras Incorrectas"}</h1>
                <h1>{arrayPalabra}</h1>
                <h1>{palabra}</h1>
                {abc.map((l, i) =>
                    <Button onClick={letraOk} id="botones" variant="outline-primary"
                        key={i}
                    >
                        {l.letra}
                    </Button>
                )}
                <h1>{resultado}</h1>
            </div>
        )
    } else {
        return (
            <div>
                <figure>
                    <img src={imagen} height="100" width="100" />
                </figure>
                <Button onClick={handleClick}>Comenzar Juego</Button>
            </div>
        )

    }

};