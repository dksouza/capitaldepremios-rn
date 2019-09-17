import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f8f8f8;
`;

export const ContentHeader = styled.View`
  width: 100%;
  padding: 20px;
  text-align: center;
  align-items: center;
  background: #fff;
  box-shadow: 2px 2px 3px #d6d6d6;
`;

export const Title = styled.Text`
  font-size: 11px;
  color: #606060;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #606060;
  text-align: center;
`;

export const ContentPrice = styled.View`
  margin-top: 20px;
  text-align: center;
  flex-direction: row;
  align-items: center;
`;

export const Currency = styled.Text`
  font-family: "poppins-bold";
  font-size: 24px;
  color: #77a037;
`;

export const Price = styled.Text`
  font-family: "poppins-bold";
  font-size: 50px;
  color: #77a037;
`;

export const ContentButtonsHeader = styled.View`
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ViewChargeBack = styled.View`
  width: 100%;
  padding: 20px 40px;
  border-color: #ccc;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ViewRecharge = styled.View`
  width: 100%;
  padding: 20px 40px;
  background: #0d9bd6;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ChargeBack = styled.Text`
  font-family: "lato-bold";
  font-size: 12px;
  color: #606060;
`;

export const Recharge = styled.Text`
  font-family: "lato-bold";
  font-size: 12px;
  color: #fff;
`;
