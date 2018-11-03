import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, Image,ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { TingHeaderText } from '../../../components/CustomUI'
import {ImageList,ExImageList} from '../../../components/ListingImage'
import { explores, data_samples } from '../TabAssets'
class ExploreView extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name={Platform.OS === 'android' ? "md-search" : "ios-search"} size={25} color={tintColor} />
        )
    }
    state={
        data :data_samples,
        savedSelected:[]
    }
    saveSelected = (id) =>{
        this.updateIconState(id)
    }
    updateIconState= (id)=>{
        let stateHolder = this.state['data']
        stateHolder[id]={
            ...stateHolder[id],
            saved: !stateHolder[id].saved
        }
        this.setState({
        })
    }
    render() {
        return (
            <View style={styles.parentContainer}>
                <TingHeaderText>Explore</TingHeaderText>
                <ScrollView contentContainerStyle={{paddingBottom:50}} style={styles.innercontainer}>
                        <ImageList getData={explores} />
                        <ExImageList getData={this.state.data} titleList='Zürich' savedIt={this.saveSelected}/>
                        <ExImageList getData={this.state.data} titleList='Stockholm' savedIt={this.saveSelected}/>
                        <ExImageList getData={this.state.data} titleList='Philippines' savedIt={this.saveSelected}/>
                        <ExImageList getData={this.state.data} titleList='Singapore' savedIt={this.saveSelected}/>
                </ScrollView>
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
    },
    tingtextStyle:{
        color:'#585858'
    },
});

export default ExploreView;