import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

//Header
import Header from "../../components/Header";

import { Container } from "./styles";

import { useSelector, useDispatch } from "react-redux";

export default function Teste({ navigation }) {
  // redux
  const common_state = useSelector(state => state.common);
  const dispatch = useDispatch();

  // state
  const [title, setTitle] = useState("Teste page");

  // Life Cycle
  useEffect(() => {}, []);

  return (
    <>
      <Header menu bg back title="PRÊMIOS" right />
      <Container>
        <Button
          title="Go to home page"
          onPress={() => navigation.navigate("Home")}
        />
        <Text>{title}</Text>
      </Container>
    </>
  );
}
