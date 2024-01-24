import "react-native-gesture-handler";
import { StyleSheet, Text, View } from 'react-native';

import Greetings from './src/components/Greetings';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hey, user</Text>
        <Greetings firstName="Maria" lastName="Sánchez" />
        <Greetings firstName="Victor" lastName="Rivas" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});