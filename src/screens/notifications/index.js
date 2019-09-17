import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  TouchableOpacity,
  ScrollView
} from "react-native";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Header
import Header from "../../components/Header";

//Utils
import { colors } from "../../utils";

// styles
import { Container, Box, BoxText } from "./styles";

import { useSelector, useDispatch } from "react-redux";

export default function Notifications({ navigation }) {
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
      <Header menu bg title="NOTIFICAÇÕES" bgColor={colors.primary} />
      <ScrollView>
        <Container>
          <Box>
            {/* <Ionicons
              name="md-notifications"
              size={26}
              color={colors.primary}
            /> */}
            <TouchableOpacity onPress={() => alert("Ler mensagem")}>
              <BoxText>
                Confira o resultado dos ganhadores do último sorteio... Joana
                Luciana
              </BoxText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Remover mensagem")}>
              <Ionicons name="md-trash" size={26} color={colors.secondary} />
            </TouchableOpacity>
          </Box>
        </Container>
      </ScrollView>
    </>
  );
}
