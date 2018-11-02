import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const BigTingText = props =>(
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
export default BigTingText;