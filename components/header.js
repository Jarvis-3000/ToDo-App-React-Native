import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Header() {
  return <Text style={[styles.heading, styles.fontStyle]}>ToDo App</Text>;
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "coral",
    color: "white",
    padding: 10,
    paddingTop: 20,
    marginBottom: 30,
  },

  fontStyle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 30,
    textAlign: "center",
  },
});
