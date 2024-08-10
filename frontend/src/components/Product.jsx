import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/api/products/${props.product._id}`}>
        <Card.Img variant="top" src={props.product.image} />
      </Link>
      <Card.Body>
        <Link to={`/api/products/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3">Rs {props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
