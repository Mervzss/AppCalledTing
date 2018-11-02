import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {TingHeaderText} from '../../../components/CustomUI'
class ProfileView extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'android' ? "md-person" : "ios-person-outline"} size={25} color={tintColor} />
        )
    }
    render(){
        return(
            <View style={styles.parentContainer}>
            <TingHeaderText>Profile</TingHeaderText>
            <View style={styles.innercontainer}>
                <Text>Profile View</Text>
            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
    },
    avatar: {
        backgroundColor: 'black',
        width: 60,
        height: 60,
    },
    badge: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        transform:[
            {translateY:30},
            {translateX:30}
        ]
    },
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

export default ProfileView;