import React from "react";
import "./Styles/Desarrolladores.css";

const Integrantes = (props) => {
    return (
        <div className="contProps">
            <div className="contenedortexto">
                <div className="name">{props.name}</div>
                <div className="gitname">{props.gitname} </div>
                <div className="descripcion">{props.descripcion}</div>
                <a href={props.link}>Has click aca si quieres ver mis trabajos</a>
            </div>
            
            <img className="imagen" src={props.img} alt="foto de perfil Git" />
           

        </div>
    )
}

export default Integrantes;