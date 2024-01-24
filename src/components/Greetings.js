import React from 'react'
import { View, Text } from 'react-native'

export default function Greetings(props) {
    const {name} = props;
    return (
        <View>
            <Text> How are you doing {name} </Text>
        </View>
    )
}