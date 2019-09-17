import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  width: 100%;
  min-height: 90px;
  padding: ${Platform.OS !== "ios" ? "20px" : "0px"} 20px 0px 20px;
  background: ${props => props.bgColor};
  justify-content: space-between;
  align-items: center;
  position: ${props => (props.position ? "absolute" : "relative")};
  flex-direction: row;
  z-index: 999999999;
  elevation: 999;
  top: 0;
  left: 0;
`;

export const Menu = styled.View``;

export const Back = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 16;
  font-weight: bold;
  font-family: "lato-black";
`;

export const Right = styled.View``;

export const ContentMenu = styled.View`
  width: 25px;
  height: 18px;
  justify-content: space-between;
`;

export const LineMenu = styled.View`
  width: ${props => (props.sizeLine === 2 ? "100%" : "50%")};
  height: 2px;
  background: #fff;
  margin-bottom: 2px;
`;
