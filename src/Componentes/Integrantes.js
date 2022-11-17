import React from "react";
import "./Styles/Peliculas.css";

const Integrantes = (props) => {
    return (
        <div className="contProps">
            <div className="contenedortexto">
                <div className="name">{props.name}</div>
                <div className="genero">{props.genero} </div>
                <div className="descripcion-actores">{props.descripcion}</div>
                <a href={props.link}>Has click para ver el trailer</a>
                <div className="puntuacion">{props.puntuacion}</div>
                <div className="descripcion-actores">{props.actores}</div>
            </div>
            
            <img className="imagen" src={props.img} alt="foto de la pelicula" />
           

        </div>
    )
}

export default Integrantes;