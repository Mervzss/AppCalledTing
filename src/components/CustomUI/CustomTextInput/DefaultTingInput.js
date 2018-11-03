import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export const TingInput = props => {
    return (
        // Head Title
        <View style={{ width: '90%', marginBottom: '5%' }}>
            <View style={styles.inTextView}>
                <Text style={styles.textStyle}> {props.textTitle}</Text>

                {/* Secret Password Viewing Using passToggle props */}
                {props.passToggle && (
                    <View style={{ width: '20%' }}>
                        <TouchableOpacity onPress={props.onShowPress}>
                            <Text style={styles.textStyle}>SHOW</Text>
                        </TouchableOpacity>
                    </View>
                )}
                {/* TextInput  */}
            </View>
            <TextInput style={styles.inputStyle}
                underlineColorAndroid="white"
                {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        width: '100%',
        backgroundColor: 'transparent',
        color: 'white'
    },
    textStyle: {
        fontSize: 16,
        color: 'white',
        width: '80%'
    },
    inTextView: {
        flexDirection: 'row'
    }
});

