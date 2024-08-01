import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="container-fluid d-flex flex-column min-vh-100"
      style={{ paddingLeft: "0px" }}
    >
      <Header />
      <div className="row flex-grow-1">
        <div className="col content">
          <Container>
            <Outlet></Outlet>
          </Container>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
