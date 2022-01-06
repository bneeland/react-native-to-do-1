import React, {useState} from 'react';
import { KeyboardAvoidingView, TouchableOpacity, Keyboard, StyleSheet, Text, View, TextInput } from 'react-native';
import Person from './components/Person';

export default function App() {
  const [person, setPerson] = useState();
  const [personItems, setPersonItems] = useState([]);

  const handleAddPerson = () => {
    Keyboard.dismiss();
    setPersonItems([...personItems, person]);
    setPerson(null);
  }

  const completePerson = (index) => {
    let itemsCopy = [...personItems];
    itemsCopy.splice(index, 1);
    setPersonItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>People</Text>
        <View>
          {
            personItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completePerson(index)}>
                  <Person text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput placeholder={'Write a person'} value={person} onChangeText={text => setPerson(text)} />
        <TouchableOpacity onPress={() => handleAddPerson()}>
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
