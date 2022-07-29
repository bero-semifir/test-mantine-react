import React from "react";
import { Container, Header, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import Flex from "./Flex.layout";

const NavBar = () => {
  return (
    <Header height={80}>
      <Container>
        <Title>
          <Link to="/">Poulet</Link>
        </Title>
        <Flex>
          <Link to="/formation">Formations</Link>
          <Link to="/formation">Formations</Link>
          <Link to="/formation">Formations</Link>
          <Link to="/formation">Formations</Link>
          <Link to="/formation">Formations</Link>
        </Flex>
      </Container>
    </Header>
  );
};

export default NavBar;
