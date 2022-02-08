import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "./listItem";

function List({ tasks, deleteTask }) {
  return (
    <FlatList
      style={styles.list}
      keyExtractor={(item) => item.key}
      data={tasks}
      renderItem={({ item }) => {
        return <ListItem item={item} deleteTask={deleteTask}/>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
      flex:1
  },
});

export default List;
