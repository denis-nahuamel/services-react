import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
const AddService = () => {
    const sendService = (event)=>{
        event.preventDefault();
        const { nombre, descripcion} = event.target.elements
        console.log(nombre.value, descripcion.value);
    }
    return (
        <Card style={{ width: '18rem' }} >
            <Form onSubmit={sendService}>
                <Card.Body>
                    <Card.Title >Servicio</Card.Title>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text"  name="name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text"  name="descripcion"/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer >
                    <Button variant="outline-success" type="submit">Grabar</Button>
                    <Button variant="outline-danger">Cancelar</Button>
                </Card.Footer>
            </Form>
        </Card>
    );
}
export default AddService;