import { StyleSheet, Text, View } from 'react-native';
import Greetings from './src/components/Greetings';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hey, user</Text>
      <Greetings name="Victor Rivas" />
      <Greetings name="Maria Sánchez" />
      <Greetings name="Patricia Flores" />
    </View>
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