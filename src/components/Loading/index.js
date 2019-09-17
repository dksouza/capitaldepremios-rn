import React from "react";
import { View, ActivityIndicator } from "react-native";

import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function Loading() {
  const state_common = useSelector(state => state.common);
  console.log(state_common, "LOADING COMPONENT");

  return (
    <>
      {state_common.loading ? (
        <Container>
          <ActivityIndicator size="small" color="#fff" />
        </Container>
      ) : (
        <View />
      )}
    </>
  );
}
