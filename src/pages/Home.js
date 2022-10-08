import Header from "../Componentes/Header";
import Main from "../Componentes/Main";
import sonidoFondo from '../assets/sounds/sonidoFondo.mp3'
 

export default function Home() {
    new Audio (sonidoFondo).play();
    return (
        <div>
            <Header/>
            <Main/>
        </div>

    )
};
