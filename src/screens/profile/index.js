import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Animated,
  TouchableOpacity,
  ScrollView
} from "react-native";

//Icons
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//Avatar
import ImgPhoto from "../../../assets/avatar.png";

//Header
import Header from "../../components/Header";

//Utils
import { colors } from "../../utils";

// styles
import {
  Container,
  HeaderProfile,
  PhotoView,
  Photo,
  EditPhoto
} from "./styles";

import { useSelector, useDispatch } from "react-redux";

export default function Profile({ navigation }) {
  // redux
  const common_state = useSelector(state => state.common);
  const dispatch = useDispatch();

  // state
  const [title, setTitle] = useState("Home page");
  const [animatedTitle, setAnimatedTitle] = useState(new Animated.Value(0));

  // Life Cycle
  useEffect(() => {
    Animated.timing(animatedTitle, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <>
      <Header menu bg bgColor="transparent" right absolute />
      <ScrollView>
        <Container>
          <HeaderProfile>
            <PhotoView>
              <Photo source={ImgPhoto} />

              <EditPhoto onPress={() => alert("Edit profile")}>
                <MaterialIcons name="edit" size={26} color="#fff" />
              </EditPhoto>
            </PhotoView>
          </HeaderProfile>
        </Container>
      </ScrollView>
    </>
  );
}
