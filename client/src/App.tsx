import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./views/Home";
import CustomerList from "./views/CustomerList";
import Header from "./components/Header";
import CustomerDetail from "./views/CustomerDetail";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomerEdit from "./views/CustomerEdit";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/:id" element={<CustomerDetail />} />
          <Route path="/customers/:id/edit" element={<CustomerEdit />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
