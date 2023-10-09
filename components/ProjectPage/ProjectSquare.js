import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";


export default function ProjectSquare() {

  return (
    <View style={styles.container}>
     <Text>This is the project square that will be rendered as a list with the names and will link to another component dynamically.
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
