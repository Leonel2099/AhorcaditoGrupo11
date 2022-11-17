import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import img  from '../Assets/Icon/icon.png';


export default function NavBar() {
    return (
        <div className='container-nav'>
            <Navbar  variant="dark">
                <Container className='mx-3'>
                    <Navbar.Brand href="#home">
                        <img
                            alt="image-nav"
                            src={img}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>

                        <Nav.Link href="/Cartelera">Cartelera</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
};
                       // <Nav.Link href="/NavBarHome">Contactanos</Nav.Link>