import { RefreshControl } from "react-native-web";
import {SafeAreaView, StyleSheet, TextInput,  Text, View } from 'react-native';
import { useState } from "react";

export default function NewTaskForm() {
  const [titleText, onChangeSetTitleText] = useState('');
  return (
    <View style={styles.container}>
      <Text>Add a New Task:</Text>
      <TextInput
        style={styles.input}
        onChangeText={ onChangeSetTitleText}
        value={titleText}
        placeholder={"New Task Title"}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    maxWidth: 500,
    textAlign: 'center',
    // position: 'absolute',
    padding: 15
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});