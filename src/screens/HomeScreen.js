import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = (name) => {
    navigation.navigate(name);
  }
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button onPress={() => goToPage('Settings')} title="Go to Settings"/>
    </SafeAreaView>
  )
}