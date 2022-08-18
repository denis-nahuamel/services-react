import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardService = ({data}) =>{
    const {type,name,description} = data
    return (
        <Card style={{ width: '18rem' }} >
          <Card.Body>
            <Card.Title >{name}</Card.Title>
            <Card.Text >
              {description}
            </Card.Text>
          </Card.Body>
          <Card.Footer >
             <Button variant="light">Primary</Button>
             <Button variant="light">Eliminar</Button>
        </Card.Footer>
        </Card>
      );
}
export default CardService;