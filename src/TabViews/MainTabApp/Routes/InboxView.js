import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TingHeaderText } from '../../../components/CustomUI'
import { MessageList } from '../../../components/ListingImage'
import { messageDetails } from '../TabAssets'
class InboxView extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'android' ? "md-chatbubbles" : "ios-chatbubbles-outline"} size={25} color={tintColor} />
        )
    }
    render() {
        return (
            <View style={styles.parentContainer}>
                <TingHeaderText>Inbox</TingHeaderText>
                <View style={styles.innercontainer}>
                    <Text style={{ paddingLeft: 20, color: '#6E6E6E', fontSize: 16, marginBottom: 5 }}>You have no unread messages</Text>
                    <MessageList getData={messageDetails} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
    innercontainer: {
        flex: 1,
        width: '100%',
        paddingTop: 20
    },
});

export default InboxView;