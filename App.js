import React from 'react';
import { KeyboardAvoidingView, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Tasks</Text>
        <View>
          <Task text={'Task 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput placeholder={'Write a task'} />
        <TouchableOpacity>
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
