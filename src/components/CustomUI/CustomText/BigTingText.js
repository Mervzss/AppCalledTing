import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export const TingBigText = props =>(
    <View style={{width:'90%'}}>
        <Text style={[styles.textStyle,props.style]}>{props.children}</Text>
    </View> 
)
const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30,
      textAlign: 'left',
      paddingBottom:'5%',
      color:'white'
    },
  });
