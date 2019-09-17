import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { DrawerActions } from "react-navigation";

//Icons
import { Ionicons, Feather } from "@expo/vector-icons";

//Utils
import { colors } from "../../utils";

import { withNavigation } from "react-navigation";

import {
  Container,
  Menu,
  Title,
  Right,
  Back,
  ContentMenu,
  LineMenu
} from "./styles";

const Header = props => {
  useEffect(() => {
    console.log(props, "PROPS");
  }, []);

  const { menu, bg, bgColor, back, title, right, absolute } = props;

  return (
    <Container
      bgColor={bgColor ? bgColor : "#f7f7f7"}
      position={absolute ? "absolute" : null}
    >
      {menu ? (
        <View>
          <TouchableOpacity
            onPress={() =>
              props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          >
            {/* <Menu>
                <Ionicons name="ios-menu" size={30} color="white" />
              </Menu> */}
            <ContentMenu>
              <LineMenu sizeLine={2} />
              <LineMenu sizeLine={2} />
              <LineMenu sizeLine={1} />
            </ContentMenu>
          </TouchableOpacity>
        </View>
      ) : null}

      {back ? (
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Back>
              <Feather name="arrow-left" size={30} color="#0D9BD6" />
            </Back>
          </TouchableOpacity>
        </View>
      ) : null}

      {title ? (
        <View>
          <Title>{title}</Title>
        </View>
      ) : (
        <View />
      )}

      {right ? (
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Notifications")}
          >
            <Right>
              <Ionicons name="md-notifications" size={26} color="white" />
            </Right>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default withNavigation(Header);
