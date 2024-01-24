import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = (name) => {
    navigation.navigate(name);
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => goToPage('Settings')} title="Go to Settings"/>
    </View>
  )
}