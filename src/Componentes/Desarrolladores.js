import React from "react";
import Integrantes from "./Integrantes.js";
import "./Styles/Desarrolladores.css";
import desarrolladores from "../Componentes/Json/desarrolladores"


function Desarrolladores() {

  return (
    <div className="contPadre">
      <div className="contPrincipal">
        {
          desarrolladores.map((e, i) => <Integrantes
            key={i}
            name={e.name}
            gitname={e.gitname}
            descripcion={e.descripcion}
            img={e.img}
            link={e.link} />
          )
        }
      </div>
    </div>

  );
}

export default Desarrolladores;
