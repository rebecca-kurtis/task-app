import { StatusBar } from "expo-status-bar";
import { Helmet } from "react-helmet";
import { StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

import NewTaskForm from "./components/NewTaskFormPage/NewTaskForm";
import NavBarIndex from "./components/NavBar/NavBarIndex";

const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.homeContainer}>
       
          <Helmet>
          </Helmet>
          <NewTaskForm />
          <StatusBar style="auto" />

      </Layout>
      {/* <HomeScreen /> */}
      <NavBarIndex />
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#B8D0EB",
    justifyContent: "center",
    alignContent: "center",
    maxWidth: 500,
    height: 1200,
    textAlign: "center",
    // position: 'absolute',
    padding: 15,
    color: "#fff"
  },
});
