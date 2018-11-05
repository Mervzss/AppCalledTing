import React from 'react'
import { View, Image, StyleSheet, Text,TouchableOpacity } from 'react-native'

export const BaseList = props => {
    return (
        <View style={styles.wrapMessage}>
            <TouchableOpacity>
            <View style={styles.messageStyle}>
                <View style={{ width: '18%' }}>
                    <Image style={styles.imageStyle} source={{ uri: props.imgSource }} resizeMode='cover' />
                </View>
                <View style={{ flexDirection: 'column', width: '82%' }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        width: '100%', paddingBottom: 12
                    }}>
                        <Text style={{ color: '#2E2E2E', fontSize: 18, fontWeight: 'bold' }}>{props.name}</Text>
                        <Text style={{ color: '#6E6E6E', fontSize: 12, paddingTop: 4 }}>{props.date}</Text>
                    </View>
                    <Text style={{ color: '#6E6E6E', fontSize: 15 }}>
                        {props.content}
                    </Text>
                </View>

            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    messageStyle: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D8D8',
        justifyContent: 'center',
    },
    wrapMessage: {
        paddingHorizontal: 20,
        paddingTop: 10
    }
});