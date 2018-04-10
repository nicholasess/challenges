import React, { Component } from "react";
import styled from "styled-components";
import Content from "../components/container";
import { ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Loading from "../components/loading";
const Container = styled.View`
  flex: 1;
`;

const Name = styled.Text`
  font-size: 18;
  margin-left: 10;
  color: #000;
`;

const Header = styled.View`
  height: 50;
  width: 100%;
  background-color: #fff;
  border-bottom-width: 1;
  flex-direction: row;
  align-items: center;
`;

const ButtonBack = styled.TouchableOpacity`
  padding-vertical: 10;
  padding-horizontal: 10;
  margin-right: 10;
`;

const HeaderTitle = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #000;
`;

const Data = styled.View`
  width: 100%;
  height: 50;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1;
  border-bottom-color: #b0b0b0;
`;

const DataTitle = styled.Text`
  font-size: 16;
  color: #b0b0b0;
  margin-top: 15;
  margin-bottom: 10;
`;

export default class ItemDetail extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    user: {},
    loading: true
  };

  async componentWillMount() {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${
        this.props.navigation.state.params.id
      }`
    );
    response = await response.json();
    this.setState({ user: response, loading: false });
  }
  render() {
    let { user, loading } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (
      <Container>
        <Header>
          <ButtonBack onPress={() => this.props.navigation.popToTop()}>
            <Icon name="arrow-left" size={22} color="#000" />
          </ButtonBack>
          <HeaderTitle>{user.name}</HeaderTitle>
        </Header>
        <Content>
          <DataTitle>Dados Pessoais</DataTitle>
          <Data>
            <Icon name="user" size={18} color="#000" />
            <Name>{user.name}</Name>
          </Data>
          <Data>
            <Icon name="user-check" size={18} color="#000" />
            <Name>{user.username}</Name>
          </Data>
          <Data>
            <Icon name="mail" size={18} color="#000" />
            <Name>{user.email}</Name>
          </Data>
          <Data>
            <Icon name="phone" size={18} color="#000" />
            <Name>{user.phone}</Name>
          </Data>
          <Data>
            <Icon name="link" size={18} color="#000" />
            <Name>{user.website}</Name>
          </Data>
          <DataTitle>Endereço</DataTitle>
          <Data>
            <Icon name="mail" size={18} color="#000" />
            <Name>
              {user.address.street} {user.address.suite} / {user.address.city}
            </Name>
          </Data>

          <DataTitle>Empresa Atual</DataTitle>
          <Data>
            <Icon name="globe" size={18} color="#000" />
            <Name>{user.company.name}</Name>
          </Data>
        </Content>
      </Container>
    );
  }
}
