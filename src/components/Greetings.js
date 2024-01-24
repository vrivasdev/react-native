import React from 'react'
import { View, Text } from 'react-native'

export default function Greetings(props) {
    const {firstName, secondName} = props;
    return (
        <View>
            <Text> How are you doing {firstName} {secondName}? </Text>
        </View>
    )
}

Greetings.defaultProps = {
    firstName: "Victor",
    secondName: "Rivas"
};