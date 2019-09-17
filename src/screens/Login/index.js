import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";

//actions
import { setLoading } from "../../actions/index";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Header
import Header from "../../components/Header";

//Utils
import { colors } from "../../utils";

// styles
import {
  Container,
  Content,
  ContentLogo,
  Logo,
  Title,
  Form,
  InputText,
  ViewAvoid,
  Forgot,
  Enter,
  NewAccount,
  TouchableEnter,
  TouchableNewAccount,
  Spacing
} from "./styles";

//Logo
import ImgLogo from "../../../assets/logo.png";

import { useSelector, useDispatch } from "react-redux";

const { width, height } = Dimensions.get("window");

export default function Login({ navigation }) {
  // redux
  const common_state = useSelector(state => state.common);
  const dispatch = useDispatch();

  // state
  const [cpf, setCpf] = useState("00000000000");
  const [password, setPassword] = useState("12345678");
  const [animatedTitle, setAnimatedTitle] = useState(new Animated.Value(0));

  async function login() {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      navigation.navigate("Home");
    }, 2000);
  }

  // Life Cycle
  useEffect(() => {
    Animated.timing(animatedTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ViewAvoid>
        <Container minHeight={height}>
          <Content>
            <ContentLogo>
              <Logo source={ImgLogo} resizeMode="contain" />
            </ContentLogo>

            <Form>
              <Title>Comece agora</Title>
              <InputText
                keyboardType="numeric"
                placeholder="Digite seu CPF aqui"
                onChangetext={text => setCpf(text)}
                value={cpf}
              />
              <InputText
                secureTextEntry
                placeholder="Digite sua senha aqui"
                onChangetext={text => setPassword(text)}
                value={password}
              />

              <TouchableOpacity onPress={() => alert("Esqueci minha senha")}>
                <Forgot>Esqueci minha senha</Forgot>
              </TouchableOpacity>

              <TouchableEnter onPress={() => login()}>
                <Enter>Entrar</Enter>
              </TouchableEnter>

              <TouchableNewAccount
                onPress={() => navigation.navigate("NewAccount")}
              >
                <NewAccount>Criar conta</NewAccount>
              </TouchableNewAccount>
            </Form>
          </Content>
        </Container>
      </ViewAvoid>
    </KeyboardAvoidingView>
  );
}
