import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardService = ({data}) =>{
    const {type,name,description} = data
    return (
        <Card style={{ width: '18rem', height:'10rem'}} >
          <Card.Body>
            <Card.Title >{name}</Card.Title>
            <Card.Text >
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer >
             <Button variant="light">Editar</Button>
             <Button variant="light">Eliminar</Button>
        </Card.Footer>
        </Card>
      );
}
export default CardService;