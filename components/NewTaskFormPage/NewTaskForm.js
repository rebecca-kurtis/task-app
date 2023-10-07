import { RefreshControl } from "react-native-web";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import PriorityLevelDropdownSelect from "./PriorityLevelDropdownSelect";
import DatePickerFormBox from "./DatePickerFormBox";
import { Button, Layout, Text } from "@ui-kitten/components";
import ProjectDropdownSelect from "./ProjectDropdownSelect";

export default function NewTaskForm() {
  const [newTaskForm, setNewTaskForm] = useState({
    task_title: "",
    task_description: "",
    priority_level: "Set Priority Level",
    completed: "",
    due_date: "",
  });

  // Set the value of a single element of the object
  const setValue = (key, value) => {
    setNewTaskForm({ ...newTaskForm, [key]: value });
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    setNewTaskForm(newTaskForm);
    console.log("handle submit log", newTaskForm);

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
      <Layout style={styles.taskFormContainer}>
        <Text category="h2" style={styles.titleH1}>Add a New Task:</Text>
        <View style={styles.titleSpacer}/>
        <Text category="h6" style={styles.titleH3}>Task Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            console.log("e", e);

            setValue("task_title", e);
          }}
          value={newTaskForm.task_title}
          placeholder={"Task Title"}
        />
        <View style={styles.titleSpacer}/>
        <DatePickerFormBox state={newTaskForm} setState={setValue} />
        <View style={styles.titleSpacer}/>
        <PriorityLevelDropdownSelect state={newTaskForm} setState={setValue} />
        <View style={styles.titleSpacer}/>
        <ProjectDropdownSelect />
        <View style={styles.titleSpacer}/>
        <Text category="h6" style={styles.titleH6}>Task Description:</Text>
        <TextInput
          style={styles.description}
          onChangeText={(e) => setValue("task_description", e)}
          value={newTaskForm.task_description}
          placeholder={"Task Description"}
        />
        <View style={styles.buttonSpacer}/>
        <Button 
          onPress={handleUserSubmit}
          style={styles.submitButton}
          > <Text category="h6" style={styles.titleH6}>Add Task</Text>
          </Button>
      </Layout>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8D0EB",
    justifyContent: "center",
    alignContent: "center",
    maxWidth: 500,
    maxHeight: 1000,
    textAlign: "center",
    // position: 'absolute',
    padding: 15,
  },
  taskFormContainer: {
    backgroundColor: "#6F2DBD",
    padding: 25,
    alignContent: "center",
    justifyContent: "center",

  },
  titleH1: {
    color: "#fff",
  },
  titleH3: {
  
    color: "#fff",
    paddingBottom: 10,
  },
  titleH6: {
    color: "#fff",
  },
  titleSpacer: {
    height: 10
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    color: "#fff",
    borderColor: "#B9FAF8",
    borderWidth: 2,
  },
  description: {
    height: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: "#B9FAF8",
    borderWidth: 2,
    color: "#fff"
  },
  buttonSpacer: {
    height: 20,
  },
  submitButton: {
    padding: 25,
    height: 50,
    width: 150,
    alignSelf: "center",
    backgroundColor: "#B298DC",
    borderColor: "#B298DC",

  }
});
