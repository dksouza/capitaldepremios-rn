import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";

//Styles
import {
  Container,
  Header,
  Avatar,
  HeaderInfo,
  Name,
  City,
  LogoutView,
  Logout
} from "./styles";

//Avatar
import imgAvatar from "../../../assets/avatar.png";

const DrawerContent = ({ items, ...props }) => (
  <Container>
    <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
      <Header>
        <Avatar>
          <Image source={imgAvatar} style={{ width: 80, height: 80 }} />
        </Avatar>
        <HeaderInfo>
          <Name>João Carlos</Name>
          <City>Brasília, DF</City>
        </HeaderInfo>
      </Header>
    </TouchableOpacity>
    <DrawerItems
      {...props}
      style={{ marginTop: 200 }}
      items={items.filter(
        item => item.routeName !== "Home" && item.routeName !== "Profile"
      )}
    />
    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
      <LogoutView>
        <Logout>Sair</Logout>
      </LogoutView>
    </TouchableOpacity>
  </Container>
);

export default DrawerContent;
