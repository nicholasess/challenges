import React, { Component } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";

const Loading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => (
  <Loading>
    <ActivityIndicator size="large" />
  </Loading>
);
