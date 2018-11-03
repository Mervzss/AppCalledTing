import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TingHeaderText } from '../../../components/CustomUI'
import { saved_list } from '../TabAssets'
import { SimpleImageList } from '../../../components/ListingImage'
class SavedView extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'android' ? "md-heart-outline" : "ios-heart-outline"} size={25} color={tintColor} />
        )
    }
    render() {
        return (
            <View style={styles.parentContainer}>
                <TingHeaderText>Saved</TingHeaderText>
                <View style={styles.innercontainer}>
                    <SimpleImageList getData={saved_list} />
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
        flexDirection: 'column',
        width: '100%',
    },
});

export default SavedView;