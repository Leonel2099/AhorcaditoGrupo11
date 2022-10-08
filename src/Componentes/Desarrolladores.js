import React from "react";
import Integrantes from "./Integrantes";
import "./Styles/Desarrolladores.css";
import desarrolladores from "../Components/Json/Desarroladores.json"


function Desarrolladores() {

  return (
    <div className="contPadre">
      <div className="contPrincipal">
          {
            desarrolladores.map((e) => <Integrantes
              name={e.name}
              gitname={e.gitname}
              descripcion={e.descripcion}
              img={e.img} 
              link={e.link}/>
            )
          }
        </div>
      </div>

  );
}

export default Desarrolladores;
