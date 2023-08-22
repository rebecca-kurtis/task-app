import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!Open up App.js to start working on your app!Open up App.js to start working on your app!Open up App.js to start working on your app!Open up App.js to start working on your app!Open up App.js to start working on your app!Open up App.js to start working on your app!Open up App.js to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

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
});
