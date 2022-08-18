import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
const AddService = () => {
    return (
        <Card style={{ width: '18rem' }} >
            <Card.Body>
                <Card.Title >Servicio</Card.Title>
                <Form>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form>
            </Card.Body>
            <Card.Footer >
                <Button variant="outline-success">Grabar</Button>
                <Button variant="outline-danger">Cancelar</Button>
            </Card.Footer>
        </Card>
    );
}
export default AddService;