import React, { Component } from 'react'
import { View, StyleSheet,Text,Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {TingHeaderText} from '../../../components/CustomUI'
class TripsView extends Component{
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name={Platform.OS === 'android' ? "md-plane" : "ios-plane"} size={25} color={tintColor}/>
        )
    }
    render(){
        return(
            <View style={styles.parentContainer}>
            <TingHeaderText>Trips</TingHeaderText>
            <View style={styles.innercontainer}>
                <Text>Trips View</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentContainer:{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    innercontainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TripsView;