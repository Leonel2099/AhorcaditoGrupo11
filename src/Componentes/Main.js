import LoadingButton from "./LoadingButton"
import "./Styles/Main.css"

export default function Game() {
    return (
        <div className="Neon">
            <div className="Contain-Title">
                <section className="Title">
                    <h1>Ahorcadito</h1>
                </section>
                <div className="Contein-Button">
                    <section >
                        <button className="btn-neon" > Play </button>
                    </section>
                </div>
            </div>
        </div>
    )
};