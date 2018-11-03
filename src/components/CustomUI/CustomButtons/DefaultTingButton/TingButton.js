import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const TingDefaultButton = props => {
    return (
        <TouchableOpacity style={{ width: '90%' }} onPress={props.onPress}>
            <View style={props.invert ? styles.invertedcustomizeButton : styles.customizeButton}>
                <Text style={props.invert ? styles.invertedcustomTextButton : styles.customTextButton}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    customizeButton: {
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: '3%',
        marginBottom: '3%'
    },
    customTextButton: {
        color: '#00A795',
        fontSize: 18,
        margin: 10
    },
    invertedcustomizeButton: {
        borderRadius: 30,
        backgroundColor: '#00A795',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1.5,
        marginTop: '3%',
        marginBottom: '3%'
    },
    invertedcustomTextButton: {
        color: 'white',
        fontSize: 18,
        margin: 10
    }
});
