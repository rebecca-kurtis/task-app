import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";


export default function ProjectPage() {

  return (
    <View style={styles.container}>
     <Text>This is the project page. IDea:
      List of projects and when you click on one, it opens up to all of the tasks?
      Projects can be squares as the title, and button, to dynamically open up. 
     </Text>
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
});
