import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: ${height};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9999999999;
  elevation: 9999999999;
  background: rgba(0, 0, 0, 0.5);
`;

export const Box = styled.View`
  width: ${width - 40};
  min-height: 100px;
  background: #fff;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
  elevation: 9999999999;
  border-radius: 10px;
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background: #0d9bd6;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-family: "lato-medium";
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
`;
