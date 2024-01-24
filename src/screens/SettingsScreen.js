import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (name) => {
    navigation.navigate(name);
  }
  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Button onPress={() => goToPage('Home')} title="Go to Home"/>
    </SafeAreaView>
  )
}