import { RefreshControl } from "react-native-web";
import {SafeAreaView, StyleSheet, TextInput,  Text, View } from 'react-native';
import { useState } from "react";
import DropdownSelect from "./DropdownSelect";
import DatePickerFormBox from "./DatePickerFormBox";

export default function NewTaskForm() {
  const [titleText, onChangeSetTitleText] = useState('');
  const [descriptionText, onChangeSetDescriptionText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.titleH1}>Add a New Task:</Text>
      <Text style={styles.titleH3}>New Task Title:</Text>
      <TextInput
        style={styles.input}
        onChangeText={ onChangeSetTitleText}
        value={titleText}
        placeholder={"New Task Title"}
      />
      <DropdownSelect/>
      <DatePickerFormBox />
      <Text style={styles.titleH3}>New Task Description:</Text>
      <TextInput
        style={styles.description}
        onChangeText={ onChangeSetDescriptionText }
        value={descriptionText}
        placeholder={"New Task Description"}
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
  titleH1: {
    fontSize: 22,
    fontWeight: 600,
  },
  titleH3: {
    fontSize: 15,
    fontWeight: 600,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  description: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});