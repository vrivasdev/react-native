import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (name) => {
    navigation.navigate(name);
  }
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button onPress={() => goToPage('Home')} title="Go to Home"/>
    </View>
  )
}