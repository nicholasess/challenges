import React, { Component } from "react";
import styled from "styled-components";
import Container from "../components/container";
import Loading from "../components/loading";
import Icon from "react-native-vector-icons/Feather";

const Item = styled.TouchableOpacity`
  width: 100%;
  height: 50;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: ${1 / 2};
  border-bottom-color: #000;
`;

const ItemTitle = styled.Text`
  font-size: 14;
  color: #000;
`;

export default class Home extends Component {
  static navigationOptions = {
    title: "Lista de Usuários"
  };

  state = {
    users: [],
    loading: true
  };

  async componentWillMount() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    response = await response.json();
    this.setState({ users: response, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <Container>
        {this.state.users.map(user => (
          <Item
            onPress={() =>
              this.props.navigation.navigate("ItemDetail", { id: user.id })
            }
            key={user.id}
          >
            <ItemTitle>{user.name}</ItemTitle>
            <Icon name="arrow-right" size={20} color="#000" />
          </Item>
        ))}
      </Container>
    );
  }
}
