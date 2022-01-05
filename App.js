import React, {useState} from 'react';
import { KeyboardAvoidingView, TouchableOpacity, Keyboard, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Tasks</Text>
        <View>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
