import React, { Component } from "react";
import styled from "styled-components";
import Item from "../components/item";

const List = styled.ul`
  padding: 0;
`;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ items: json });
      });
  }

  render() {
    let { items } = this.state;
    return (
      <Container>
        <Title>Lista de Usuários</Title>
        <List>
          {items.map((item, index) => <Item key={index * 3} item={item} />)}
        </List>
      </Container>
    );
  }
}
