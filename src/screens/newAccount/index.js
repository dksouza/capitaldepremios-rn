import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

//actions
import { setLoading, getViaCep } from "../../actions/index";

//Icons
import { Ionicons } from "@expo/vector-icons";

//Header
import Header from "../../components/Header";

//Utils
import { colors } from "../../utils";

// styles
import {
  Container,
  Title,
  Form,
  InputText,
  Subtitle,
  Submit,
  SubmitText
} from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function NewAccount({ navigation }) {
  // redux
  const common_state = useSelector(state => state.common);
  const dispatch = useDispatch();

  // state
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [animatedTitle, setAnimatedTitle] = useState(new Animated.Value(0));

  // Methods
  async function getCep() {
    if (cep.length === 8) {
      const res = await dispatch(getViaCep(cep));
      setEstado(res.uf);
      setCidade(res.localidade);
      setBairro(res.bairro);
    } else {
      setEstado("");
      setCidade("");
      setBairro("");
    }
  }

  useEffect(() => {
    getCep();
  }, [cep]);

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
      <Header back />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView>
          <Container>
            <Title>Criar conta</Title>

            <Form>
              <InputText
                placeholder="Digite seu nome completo aqui"
                onChangeText={() => {}}
              />

              <InputText
                placeholder="Digite seu CPF aqui"
                keyboardType="numeric"
                onChangeText={() => {}}
              />

              <InputText
                placeholder="Digite o número do seu celular aqui"
                onChangeText={() => {}}
              />

              <InputText
                placeholder="Digite seu e-mail aqui"
                onChangeText={() => {}}
              />

              <InputText
                placeholder="Digite sua senha aqui"
                secureTextEntry
                onChangeText={() => {}}
              />

              <InputText
                placeholder="Confirme sua senha"
                secureTextEntry
                onChangeText={() => {}}
              />

              <Subtitle>Endereço</Subtitle>

              <InputText
                placeholder="CEP"
                keyboardType="numeric"
                maxLength={8}
                onChangeText={text => setCep(text)}
                value={cep}
              />

              <InputText
                placeholder="Estado"
                onChangeText={text => setEstado(text)}
                value={estado}
                editable={false}
              />

              <InputText
                placeholder="Cidade"
                onChangeText={text => setCidade(text)}
                value={cidade}
                editable={false}
              />

              <InputText
                placeholder="Bairro"
                onChangeText={text => setBairro(text)}
                value={bairro}
                editable={false}
              />

              <Submit onPress={() => navigation.navigate("Login")}>
                <SubmitText>Criar conta</SubmitText>
              </Submit>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}
