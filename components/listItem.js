import React, { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { Checkbox } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

function ListItem({ item, deleteTask }) {
  const [checked, setChecked] = useState(false);

  const toCapitalize = (str) => {
    let arr = str.split(" ");
    for (let i in arr) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
  };

  const handleDelete = () => {
    Alert.alert("Alert", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        style: "default",
        onPress: () => deleteTask(item.key),
      },
    ]);
  };

  return (
    <View
      style={[
        styles.list_item,
        { borderColor: checked ? "green" : "coral" },
        { borderStyle: checked ? "solid" : "dashed" },
      ]}
    >
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => setChecked((prevState) => !prevState)}
        uncheckedColor="red"
        color="green"
        style={styles.checkbox}
      />
      <Text style={styles.list_item_text}>{toCapitalize(item.name)}</Text>
      <MaterialIcons
        name="delete"
        size={24}
        color="#000d1a"
        style={styles.delete}
        onPress={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list_item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  checkbox: {
    flex: 1,
    color: "red",
  },
  list_item_text: {
    flex: 1,
    color: "#000d1a",
    marginHorizontal: 5,
  },
});

export default ListItem;
