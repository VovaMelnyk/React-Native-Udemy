import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const TaskForm = ({ onAddTask, isOpen, toggleModal }) => {
  const [inputText, setInputText] = useState("");
  const handleChange = text => {
    setInputText(text);
  };
  const addTask = () => {
    onAddTask(inputText);
    setInputText("");
    toggleModal();
  };
  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.form}>
        <TextInput
          placeholder="Task text"
          style={styles.input}
          onChangeText={handleChange}
          value={inputText}
        />
        <Button title="ADD" style={styles.button} onPress={addTask} />
        <Button
          title="Cancel"
          style={styles.button}
          onPress={toggleModal}
          color="red"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  button: {
    alignSelf: "stretch"
  }
});

export default TaskForm;
