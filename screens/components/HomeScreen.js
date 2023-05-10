import React from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";

function HomeScreen(props) {
  return (
    <WebView
      source={{ uri: "https://qlhv.geniofut.com/index.php" }}
      style={{ flex: 1 }}
    />
  );
}

export default HomeScreen;
