import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import Header from "./components/header";
import Main from "./screens/main";

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <Header />
        <Main />
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

// styling part

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#b1e0e2",
  },
});
