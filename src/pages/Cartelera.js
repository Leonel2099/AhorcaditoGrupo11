import NavBar from "../Componentes/NavBar";
import Peliculas from "../Componentes/Peliculas.js";
import "../Componentes/Styles/Peliculas.css"

export default function Cartelera(){
    return(
        <div>
            <NavBar/>
            <Peliculas/>
        </div>
    )
};