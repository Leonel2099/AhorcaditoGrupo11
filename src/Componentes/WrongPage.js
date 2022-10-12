import img  from '../Assets/Icon/error404.png';
import "./Styles/WrongPage.css"




export default function WrongPage() {

    return (
        <div className="contain-wrongPage">
            <img
                src={img}
                className="imgerror"
            />
            <h1>Error 404</h1>
            <h2>Not Found</h2>
            <h3> The resources requested could not be found on this server </h3>
        </div>
    );
}
