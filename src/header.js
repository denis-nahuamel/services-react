import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ onHandleType }) => {
    const changeType = (value) => {
        onHandleType(value)
    }
    return (
        <>
            <h1 className="text-center">Servicios</h1>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" onClick={()=>changeType("nocategory")}>Todos</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=> changeType("cars")}>Autos</Nav.Link>
                        <Nav.Link onClick={()=> changeType("health")}>Salud</Nav.Link>
                        <Nav.Link onClick={()=> changeType("home")}>Hogar</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default Header;