import React, { useState, useEffect } from "react";
import { View, Text, Button, Animated } from "react-native";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Header
import Header from "../../components/Header";

//Utils
import { colors } from "../../utils";

// styles
import { Container } from "./styles";

import { useSelector, useDispatch } from "react-redux";

export default function Home({ navigation }) {
  // redux
  const common_state = useSelector(state => state.common);
  const dispatch = useDispatch();

  // state
  const [title, setTitle] = useState("Home page");
  const [animatedTitle, setAnimatedTitle] = useState(new Animated.Value(0));

  // Life Cycle
  useEffect(() => {
    Animated.timing(animatedTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <>
      <Header menu bg title="PRÊMIOS" bgColor={colors.primary} right />
      <Container>
        <Animated.Text
          style={{ opacity: animatedTitle, fontFamily: "open-sans-light" }}
        >
          {title}
        </Animated.Text>
      </Container>
    </>
  );
}
