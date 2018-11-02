import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export const TingInput = props => (
    <View style={{ width: '90%', marginBottom:'5%' }}>
        <Text style={styles.textStyle}> {props.textTitle}</Text>
        <TextInput style={styles.inputStyle}
            underlineColorAndroid="white"
            {...props}
        />
    </View>
)

const styles = StyleSheet.create({
    inputStyle:{
        width:'100%',
        backgroundColor:'transparent',
        color:'white'
    },
    textStyle:{
        fontSize:16,
        color:'white',
    }
  });

