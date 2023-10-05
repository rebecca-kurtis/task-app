import { RefreshControl } from "react-native-web";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import { useState } from "react";
import PriorityLevelDropdownSelect from "./PriorityLevelDropdownSelect";
import DatePickerFormBox from "./DatePickerFormBox";
import { Button } from "@ui-kitten/components";
import ProjectDropdownSelect from "./ProjectDropdownSelect";


export default function NewTaskForm() {
  const [newTaskForm, setNewTaskForm] = useState({
    task_title: "",
    task_description: "",
    priority_level: 'Set Priority Level',
    completed: "",
    due_date: "",
  });

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setNewTaskForm({...newTaskForm, [key]: value})
  }

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setNewTaskForm(newTaskForm)
    console.log('handle submit log', newTaskForm)

    // axios.post(usersRoute, newTaskForm)
    // .then((response) => {
    //   console.log('response', response);
    //   const data = response.data.loginKey;
  
    //   updateUserStorage(data[0]);

    //   setForm(data[0]);
    //   toggleAccount();
    //   setForm(data[0]);
    //   getUserOrderInfo(response.data.cartKey)
    //   console.log("local storage:", localStorage)

    //   return response.data
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     alert(`Error! ${error.message}`);
    //   } else if (error.request) {
    //     console.log("network error");
    //   } else {
    //     console.log(error);
    //   }
    // });
  };
  
  return (
    <View style={styles.container}>
      {/* <form onSubmit={handleUserSubmit} > */}

        <Text style={styles.titleH1}>Add a New Task:</Text>
        <Text style={styles.titleH3}>New Task Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            console.log("e", e)
           

            setValue("task_title", e)
            }
          }
          value={newTaskForm.task_title}
          placeholder={"New Task Title"}
        />
        <PriorityLevelDropdownSelect
        state={newTaskForm}
        setState={setValue}
        />
        <ProjectDropdownSelect />
        <DatePickerFormBox 
        state={newTaskForm}
        setState={setValue}
        />
        <Text style={styles.titleH3}>New Task Description:</Text>
        <TextInput
          style={styles.description}
          onChangeText={(e) =>
            setValue("task_description", e)
          }
          value={newTaskForm.task_description}
          placeholder={"New Task Description"}
        />
        <Button onPress={handleUserSubmit}>
          Submit
        </Button>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
    maxWidth: 500,
    textAlign: "center",
    // position: 'absolute',
    padding: 15,
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
