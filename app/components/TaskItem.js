import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TaskItem = ({ text, onDelete, id }) => (
  <TouchableOpacity onPress={() => onDelete(id)}>
    <View style={styles.listItem}>
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});

export default TaskItem;
