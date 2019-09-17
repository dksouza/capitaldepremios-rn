import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  height: ${height};
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 99999999 !important;
  elevation: 3 !important;
`;
