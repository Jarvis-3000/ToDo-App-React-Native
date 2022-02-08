import React, { useState,useRef } from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet } from "react-native";

function InputForm({ handleAdd }) {
  const [input, setInput] = useState("");
  const inpRef=useRef()

  const handleSubmit=()=>{
    let status=handleAdd(input)
    if(status){
      setInput("")
    }
  }

  return (
    <View style={styles.inputField}>
      <Text>Add Tasks</Text>
      <TextInput
        multiline
        style={styles.textInput}
        keyboardType="default"
        placeholder="e.g Indrajeet"
        value={input}
        onChangeText={(val) => setInput(val)}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <Text style={styles.button}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InputForm;


const styles=StyleSheet.create({
      inputField:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        marginBottom:20
      },
      textInput:{
        borderWidth:1,
        paddingVertical:5,
        paddingHorizontal:10,
        marginTop:5,
        marginBottom:20,
        borderRadius:5
      },
      button: {
        maxWidth: 200,
        backgroundColor: "coral",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        textAlign: "center",
        color: "white",
        marginBottom: 10,
        position: "relative",
        left: "50%",
        transform: [{ translateX: -100 }],
      }
})