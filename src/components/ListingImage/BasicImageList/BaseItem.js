import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export const BaseItem = props => {
    return (
        <View style={styles.imageWrapper}>
            <Image resizeMode='stretch' source={{ uri: props.imgSource }} style={styles.imageView} />
            <Text style={styles.textView}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        borderColor: '#D8D8D8',
        borderWidth: 1,
        width: 120,
        height: '90%',
    },
    imageView: {
        width: '100%',
        height: '65%'
    },
    textView: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        paddingTop: '5%',
        color: '#585858',
        height: '35%'
    },
});
