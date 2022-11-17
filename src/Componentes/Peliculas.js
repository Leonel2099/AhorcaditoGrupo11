import React from "react";
import Integrantes from "./Integrantes.js";
import "./Styles/Peliculas.css";
import desarrolladores from "../Componentes/Json/desarrolladores"

function Peliculas() {

  return (
    <div className="contPadre">
      <div className="contPrincipal">
        {
          desarrolladores.map((e, i) => <Integrantes
            key={i}
            name={e.name}
            genero={e.genero}
            descripcion={e.descripcion}
            img={e.img}
            link={e.link} 
            puntuacion={e.puntuacion}
            actores={e.actores}/>
          )
        }
      </div>
    </div>

  );
}

export default Peliculas;
