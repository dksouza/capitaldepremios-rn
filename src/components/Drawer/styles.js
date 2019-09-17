import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  background: #f8f8f8;
  min-height: 140px;
  padding: 20px;
  align-items: center;
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 10px;
`;

export const HeaderInfo = styled.View``;

export const Name = styled.Text`
  font-size: 20px;
  font-family: "lato-bold";
  color: #606060;
`;

export const City = styled.Text`
  font-size: 10px;
  font-family: "lato-regular";
  color: #9d9b9b;
`;

export const LogoutView = styled.View`
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 10px;
  background: #0d9bd6;
  width: 80px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Logout = styled.Text`
  font-family: "lato-bold";
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;
