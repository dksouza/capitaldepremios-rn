import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f7f7f7;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: "poppins-bold";
  font-size: 28px;
  color: #77a037;
  margin-top: 15px;
`;

export const Form = styled.View`
  margin-top: 40px;
  width: 80%;
`;

export const InputText = styled.TextInput`
  width: 100%;
  padding: 15px 0px;
  border-bottom-width: 1px;
  border-bottom-color: #bbbbbb;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Subtitle = styled.Text`
  text-align: left;
  font-family: "poppins-bold";
  font-size: 22px;
  color: #77a037;
  margin-top: 15px;
`;

export const Submit = styled.TouchableOpacity`
  width: 100%;
  text-align: center;
  background: #0d9bd6;
  padding: 20px;
  margin: 30px 0px;
  border-radius: 10px;
`;

export const SubmitText = styled.Text`
  font-family: "lato-bold";
  font-size: 12px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;
