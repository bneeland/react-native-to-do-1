import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Person = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  )
}

export default Person;
