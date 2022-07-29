import { Fragment } from "react";
import "./App.css";
import { Center, Container, Footer, MantineProvider } from "@mantine/core";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./shared/NavBar";
import { ModalsProvider } from "@mantine/modals";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Container>
          <MantineProvider>
            <ModalsProvider>
              <Router />
            </ModalsProvider>
          </MantineProvider>
        </Container>
        <Footer height={10}>
          <Center>&copy;Benoît Routier</Center>
        </Footer>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
