import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f7f7f7;
  min-height: ${height};
`;

export const Box = styled.View`
  width: 85%;
  padding: 20px;
  background: #fff;
  box-shadow: 2px 2px 3px #d6d6d6;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

export const BoxText = styled.Text`
  text-align: left;
  font-family: "lato-bold";
  font-size: 14px;
  color: #606060;
  padding-right: 10px;
`;
