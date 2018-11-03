import React, { Component } from 'react'
import { View, StyleSheet,Text, Platform, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {TingHeaderText,TingBigText} from '../../../components/CustomUI'
import Sample from '../../../assets/SampleImage.jpg'
class SavedView extends Component{
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name={Platform.OS === 'android' ? "md-heart-outline" : "ios-heart-outline"} size={25} color={tintColor}/>
        )
    }
    render(){
        return(
            <View style={styles.parentContainer}>
            <TingHeaderText>Saved</TingHeaderText>
            <View style={styles.innercontainer}>
            <TingBigText style={styles.tingtextStyle}>Experiences</TingBigText>
            <Image source={Sample} style={styles.imageStyle}/>
                <Text>Saved View</Text>
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
    },
    tingtextStyle: {
        color: '#585858',
        paddingLeft: '6%',
    },
    imageStyle:{
        width:'90%',
        height: 200,
        alignSelf:'center'
    }
});

export default SavedView;