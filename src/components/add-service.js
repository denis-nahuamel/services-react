import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import { useServiceProvider } from '../context/service-context';
import { addService, updateService } from '../services/firestore-service';
const AddService = () => {
    const { typeService, setReloadContext, serviceUpdate, setServiceUpdateContext } = useServiceProvider();
    const [values, setValues] = useState({
        nombre: '',
        descripcion: ''
    })
    const [type, setType] = useState("Grabar");

    useEffect(() => {
        setValues({
            nombre: serviceUpdate.nombre,
            descripcion: serviceUpdate.descripcion
        });
        serviceUpdate.id !== '' ? setType("Actualizar") : setType("Grabar")
    }, [serviceUpdate])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values, [name]: value
        })
    }
    const sendService = (event) => {
        event.preventDefault();
        const { nombre, descripcion } = event.target.elements
        const send = {
            type: typeService,
            name: nombre.value,
            description: descripcion.value
        }
        if (type === "Grabar")
            addService(send).then(() => {
                setReloadContext(true);
                setValues({ nombre: '', descripcion: '' })
            })
        else {
            updateService(serviceUpdate.id, send).then(() => {
                setReloadContext(true);
                setValues({ nombre: '', descripcion: '' })
            });
            setServiceUpdateContext({
                id: '',
                nombre: '',
                descripcion: ''
            })
        }
    }
    return (
        <Card style={{ width: '20rem', height: '100%' }} >
            <Form onSubmit={sendService}>
                <Card.Body>
                    <Card.Title >Servicio</Card.Title>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="nombre" value={values.nombre} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="descripcion" value={values.descripcion} onChange={handleChange} />
                    </Form.Group>
                </Card.Body>
                <Card.Footer >
                    <Button variant="outline-success" type="submit">{type}</Button>
                    <Button variant="outline-danger">Cancelar</Button>
                </Card.Footer>
            </Form>
        </Card>
    );
}
export default AddService;