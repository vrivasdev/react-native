import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default function Greetings(props) {
    const {firstName, lastName} = props;
    return (
        <View>
            <Text> How are you doing {firstName} {lastName}? </Text>
        </View>
    )
}

// Greetings.defaultProps = {
//     firstName: "Victor",
//     secondName: "Rivas"
// };

Greetings.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};