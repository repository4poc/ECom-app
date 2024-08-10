import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

function HomeScreen() {
  /*
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  */

  const { data: Products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          (error?.data?.message || error.error)
        </Message>
      ) : (
        <>
          <h1>Letest Products</h1>
          <Row>
            {Products.map((product) => {
              return (
                <>
                  <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                </>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
}

export default HomeScreen;
