import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

//Icons
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  EvilIcons
} from "@expo/vector-icons";

//Header
import Header from "./components/Header";

//DrawerContent
import DrawerContent from "./components/Drawer";

//Screens
import Login from "./screens/Login";
import Home from "./screens/home";
import Wallet from "./screens/wallet";
import NewAccount from "./screens/newAccount";
import Notifications from "./screens/notifications";
import Profile from "./screens/profile";

const Drawer = createDrawerNavigator(
  {
    Home,
    Profile,

    Wallet: {
      screen: Wallet,
      navigationOptions: {
        drawerLabel: "Minha carteira",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-wallet" size={26} color={tintColor} />
        )
      }
    },

    MyTitles: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Meus títulos",
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="cards-outline"
            size={26}
            color={tintColor}
          />
        )
      }
    },

    Buy: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Comprar títulos",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-cart" size={26} color={tintColor} />
        )
      }
    },

    Awards: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Prêmios",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-trophy" size={26} color={tintColor} />
        )
      }
    },

    Results: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Resultados",
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="playlist-add-check"
            size={26}
            color={tintColor}
          />
        )
      }
    },

    Notifications: {
      screen: Notifications,
      navigationOptions: {
        drawerLabel: "Notificações",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-notifications" size={26} color={tintColor} />
        )
      }
    },

    About: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Sobre",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-business" size={26} color={tintColor} />
        )
      }
    },

    Questions: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Perguntas Frequentes",
        drawerIcon: ({ tintColor }) => (
          <AntDesign name="question" size={26} color={tintColor} />
        )
      }
    },

    Chat: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "Chat",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" size={26} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#0D9BD6",
      inactiveTintColor: "#606060",
      activeBackgroundColor: null,
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        fontFamily: "lato-medium"
      }
    }
  }
);

const stack = {
  Login,
  NewAccount,
  Drawer
};

const Routes = createAppContainer(
  createStackNavigator(
    {
      ...stack
    },
    {
      // mode: "modal",
      defaultNavigationOptions: ({ navigation }) => ({
        header: null
      })
    }
  )
);

export default Routes;
