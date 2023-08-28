import { StatusBar } from "expo-status-bar";
import { Helmet } from "react-helmet";
import { StyleSheet, Text, View } from "react-native";
import NewTaskForm from "./components/NewTaskForm";

export default function App() {
  return (
    <View style={styles.container}>
      <Helmet>
        <script
          src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
          crossorigin="anonymous"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin="anonymous"
          async
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin="anonymous"
          async
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        <script>var Alert = ReactBootstrap.Alert;</script>
      </Helmet>
      <NewTaskForm />
      <StatusBar style="auto" />
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
});
