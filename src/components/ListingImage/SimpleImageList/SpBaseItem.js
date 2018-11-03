import React from 'react'
import { View, Image, StyleSheet} from 'react-native'
import {TingBigText} from '../../CustomUI'
export const SimpleBaseItem = props =>{
    return(
        <View style={{paddingRight:'2%', paddingBottom:'4%'}}>
            <TingBigText style={styles.tingtextStyle}>{props.headText}</TingBigText>
            <Image source={{uri:props.imgSource}} style={styles.imageStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        width:'90%',
        height: 200,
        alignSelf:'center'
    },
    tingtextStyle: {
        color: '#585858',
        paddingLeft: '6%',
    },
});