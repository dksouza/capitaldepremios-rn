import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

//Loading
import Loading from "./src/components/Loading";

//Modal
import Modal from "./src/components/Modal";

//Redux
import { Provider, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./src/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

import Routes from "./src/routes";

export default function App() {
  const [loadFont, setLoadFont] = useState(false);
  useEffect(() => {
    getFont();
  }, []);

  async function getFont() {
    await Font.loadAsync({
      "open-sans-light": require("./assets/fonts/OpenSans-CondLight.ttf"),
      "lato-black": require("./assets/fonts/Lato-Black.ttf"),
      "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
      "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
      "lato-medium": require("./assets/fonts/Lato-Medium.ttf"),
      "poppins-bold": require("./assets/fonts/Poppins-Bold.otf")
    });
    setLoadFont(true);
  }

  return (
    <>
      {!loadFont ? (
        <View />
      ) : (
        <Provider store={store}>
          <Loading />
          {/* <Modal /> */}
          <Routes />
        </Provider>
      )}
    </>
  );
}
