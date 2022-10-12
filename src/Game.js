import "./Componentes/Styles/Game.css";
import AboutPage from "./pages/AboutPage.js";
import Home from "./pages/Home.js";
import PlayGame from "./pages/PlayGame.js";
import ErrorPage from "./pages/ErrorPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function Game() {
  return (
    <div className="background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PlayGame" element={<PlayGame />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
};
