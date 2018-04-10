import React, { Component } from "react";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #000;
  height: 30px;
  display: flex;
  align-items: center;
`;

const A = styled.a`
  text-decoration: none;
  color: #000;
`;

export default ({ item }) => (
  <ListItem>
    <A href={`/item/${item.id}`}>{item.name}</A>
  </ListItem>
);
