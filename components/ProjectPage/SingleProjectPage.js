import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";


export default function SingleProjectPage() {

  return (
    <View style={styles.container}>
     <Text>This is the project page that will showcase a single project and will be rendered with the info passed to it from the ProjectSquare.
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