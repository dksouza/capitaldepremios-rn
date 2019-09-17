import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: flex-end;
  background: #7aa438;
  min-height: ${props => props.minHeight};
`;

export const ViewAvoid = styled.ScrollView``;

export const Content = styled.View`
  background: #fff;
  flex: 1;
  width: 80%;
  right: 0 !important;
  border-top-left-radius: 35px;
  box-shadow: -2px 1px 20px #919191;
  position: relative;
  padding-top: 180px;
  align-items: center;
`;

export const ContentLogo = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 25px;
  background: #fdb71a;
  position: absolute;
  left: -40px;
  top: 50px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 80%;
  padding: 10px;
`;

export const Title = styled.Text`
  font-family: "poppins-bold";
  color: #606060;
  font-size: 41px;
  width: 185px;
  line-height: 50px;
  margin-bottom: 40px;
`;

export const Form = styled.View`
  width: 80%;
  /* border-width: 1px; */
  /* border-color: red; */
`;

export const InputText = styled.TextInput`
  background: transparent;
  padding: 15px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #bbbbbb;
  margin-bottom: 10px;
`;

export const Forgot = styled.Text`
  text-align: center;
  font-family: "lato-bold";
  font-size: 14px;
  color: #0d9bd6;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const TouchableEnter = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background: #0d9bd6;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const TouchableNewAccount = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  font-family: "lato-bold";
  background: #f8f8f8;
  border-radius: 10px;
  margin-bottom: 100px;
`;

export const Enter = styled.Text`
  font-family: "lato-bold";
  font-size: 12px;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;

export const NewAccount = styled.Text`
  font-family: "lato-bold";
  font-size: 12px;
  text-align: center;
  color: #606060;
  text-transform: uppercase;
`;

export const Spacing = styled.View`
  margin-bottom: 50px;
`;
