import React, { useEffect, useRef } from "react";
import { Image } from "react-native";
import { Animated } from "react-native";
import { View, StyleSheet } from "react-native";

//LOGO
import Logo from "../assets/logo.png";
import Text from "../assets/text.png";

function SplashScreen(props) {
  //Aniamtion Value
  const startLogoAnimation = useRef(new Animated.Value(0)).current;
  const startTextAnimation = useRef(new Animated.Value(0)).current;
  const opacityEffect = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    //Start Animation after 500ms = 5s

    //Logo animation
    setTimeout(() => {
      //sequense animation
      Animated.sequence([
        Animated.timing(startLogoAnimation, {
          //effect when finish the animation
          toValue: -130,
          useNativeDriver: true,
        }),
      ]).start();
      //duration
    }, 500);

    //Text animation - transform
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(startTextAnimation, {
          //effect when finish the animation
          toValue: 60,
          useNativeDriver: true,
        }),
      ]).start();
      //duration
    }, 600);

    //Text animation - opacity
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(opacityEffect, {
          //effect when finish the animation
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
      //duration
    }, 700);
  }, []);

  const BgColor = "#3f48cc";

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: BgColor,
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateX: startLogoAnimation }],
        }}
      >
        <Image style={{ width: 100, height: 120 }} source={Logo} />
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          // display: "none",
          transform: [{ translateX: startTextAnimation }],
          opacity: 0,
          opacity: opacityEffect,
        }}
      >
        <Image style={{ width: 250, height: 120 }} source={Text} />
      </Animated.View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({});
export default SplashScreen;
