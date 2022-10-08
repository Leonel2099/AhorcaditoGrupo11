import "./Componentes/Styles/Game.css";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";



export default function Game() {
  return (
        <div className="background">
          <BrowserRouter>
            <Route path="/" element={<Home/>}/>
              <Route path="/PlayGame" element={<Play/>}/>
              <Route path="/AboutPage" element={<AboutPage/>}/>
          </BrowserRouter>

        </div>
    )
};
