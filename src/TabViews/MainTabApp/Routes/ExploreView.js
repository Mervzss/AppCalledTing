import React, { Component } from 'react'
import { View, StyleSheet,Text,Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {TingHeaderText} from '../../../components/CustomUI'
class ExploreView extends Component{
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name={Platform.OS === 'android' ? "md-search" : "ios-search"} size={25} color={tintColor}/>
        )
    }
    render(){
        return(
            <View style={styles.parentContainer}>
            <TingHeaderText>Explore</TingHeaderText>
            <View style={styles.innercontainer}>
                <Text>Explore View</Text>
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

export default ExploreView;