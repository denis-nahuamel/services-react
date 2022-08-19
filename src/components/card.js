import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useServiceProvider } from '../context/service-context';
import { deleteService } from '../services/firestore-service';
const CardService = ({data}) =>{
  const {setReloadContext, setServiceUpdateContext} = useServiceProvider();
    const {_type,name,description} = data;
    const handleDelete = (event) => {
      event.preventDefault();
      deleteService(data.id).then(()=>setReloadContext(true));
    }
    const handleEdit = (event)=>{
      event.preventDefault();
      setServiceUpdateContext({
        id: data.id,
        nombre: name,
        descripcion: description
      })
    }
    return (
        <Card style={{ width: '18rem', height:'10rem'}} >
          <Card.Body>
            <Card.Title >{name}</Card.Title>
            <Card.Text >
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer >
             <Button variant="light" onClick={handleEdit}>Editar</Button>
             <Button variant="light" onClick={handleDelete}>Eliminar</Button>
        </Card.Footer>
        </Card>
      );
}
export default CardService;