import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  align-items: center;
  min-height: ${height};
`;

export const HeaderProfile = styled.View`
  width: 100%;
  height: 300px;
  background: #92b35f;
  position: relative;
  align-items: center;
`;

export const PhotoView = styled.View`
  width: 150px;
  height: 150px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 75px;
  bottom: -75px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const EditPhoto = styled.TouchableOpacity`
  position: absolute;
  right: -2px;
  bottom: -2px;
  background: #0d9bd6;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
  elevation: 999;
`;
