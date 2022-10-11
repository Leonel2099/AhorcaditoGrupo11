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