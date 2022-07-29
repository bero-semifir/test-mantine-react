import { Fragment } from "react";
import "./App.css";
import { Center, Container, Footer } from "@mantine/core";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./shared/NavBar";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Router />
        </Container>
        <Footer height={10}>
          <Center>&copy;Benoît Routier</Center>
        </Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
