import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [taskList, setToTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onAddTask = text => {
    setToTaskList([
      ...taskList,
      {
        key: Date.now().toString(),
        text
      }
    ]);
  };

  const onDelete = key => {
    const filteredList = taskList.filter(el => el.key !== key);
    setToTaskList([...filteredList]);
  };

  toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={styles.container}>
      <Button title="Add task" onPress={toggleModal} />
      <TaskForm
        onAddTask={onAddTask}
        isOpen={isOpen}
        toggleModal={toggleModal}
      />
      <FlatList
        data={taskList}
        renderItem={itemData => {
          return (
            <TaskItem
              text={itemData.item.text}
              onDelete={onDelete}
              id={itemData.item.key}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
