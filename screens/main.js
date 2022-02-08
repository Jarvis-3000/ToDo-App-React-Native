import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import InputForm from "../components/form";
import List from "../components/list";

export default function Main() {
  const [tasks, setTasks] = useState([
    { name: "finish learning react native", key: 1 },
  ]);

  const handleAdd = (input) => {
    if (!input) {
      Alert.alert("OOPS!", "Task should not be empty", [
        { text: "Ok", style: "cancel" },
      ]);
      return 0;
    }

    for (let task of tasks) {
      if (task.name === input) {
        Alert.alert("OOPS!", "This task already", [
          { text: "Ok", style: "cancel" },
        ]);
        return 0;
      }
    }
    //add the new task
    let key = Math.random();
    setTasks((tasks) => [...tasks, { name: input, key }]);
    return 1;
  };

  const deleteTask = (id) =>{
    setTasks((prevState)=>{
      return prevState.filter(item=>item.key!==id)
    })
  }

  return (
    <View style={styles.mainStyle}>
      <InputForm handleAdd={handleAdd} />
      <List tasks={tasks} deleteTask={deleteTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    flex:1,
    flexDirection: "column",
    padding: 30,
    paddingTop: 20,
  },
});
