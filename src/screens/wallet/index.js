import React, { useState, useEffect } from "react";
import { View, Text, Button, Animated } from "react-native";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Header
import Header from "../../components/Header";

//Utils
import { colors } from "../../utils";

// styles
import {
  Container,
  ContentHeader,
  Title,
  Subtitle,
  ContentPrice,
  Currency,
  Price,
  ContentButtonsHeader,
  ChargeBack,
  Recharge,
  ViewChargeBack,
  ViewRecharge
} from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Wallet({ navigation }) {
  // redux
  const common_state = useSelector(state => state.common);
  const dispatch = useDispatch();

  // state
  const [title, setTitle] = useState("Wallet page");
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
      <Header menu bgColor={colors.primary} title="MINHA CARTEIRA" right />
      <Container>
        <ContentHeader>
          <Title>Capital cash</Title>
          <Subtitle>Saldo atual</Subtitle>
          <ContentPrice>
            <Currency>R$</Currency>
            <Price>30,00</Price>
          </ContentPrice>

          <ContentButtonsHeader>
            <TouchableOpacity>
              <ViewChargeBack>
                <ChargeBack>ESTORNAR</ChargeBack>
              </ViewChargeBack>
            </TouchableOpacity>
            <TouchableOpacity>
              <ViewRecharge>
                <Recharge>RECARREGAR</Recharge>
              </ViewRecharge>
            </TouchableOpacity>
          </ContentButtonsHeader>
        </ContentHeader>
      </Container>
    </>
  );
}
