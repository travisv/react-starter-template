import React from "react";
import { Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";
import About from "./routes/about";
import Users from "./routes/users";
import Home from "./routes/home";
import "./App.scss";

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <h2>
        Navigate to{" "}
        <ButtonToolbar className="custom-btn-toolbar">
          <LinkContainer to="/">
            <Button className="btn">Home</Button>
          </LinkContainer>
          <LinkContainer to="/about">
            <Button>About</Button>
          </LinkContainer>
          <LinkContainer to="/users">
            <Button>Users</Button>
          </LinkContainer>
        </ButtonToolbar>
      </h2>
      <h2>
        Current Page is{" "}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </h2>
    </Container>
  </Container>
);

export default App;
