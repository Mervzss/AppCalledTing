import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { BaseItem } from './BaseItem'
export const ImageList = props => {
    return (

        <View style={styles.imageWrapper}>
            <FlatList
                data={props.getData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 70 }}
                style={{ height: '100%', paddingLeft: '2%', paddingTop: '5%', paddingRight: '5%' }}
                renderItem={(value) =>
                    (
                        <View style={{ paddingRight: '2%', paddingBottom: '2%' }}>
                            <BaseItem imgSource={value.item.img}> {value.item.name}</BaseItem>
                        </View>
                    )
                }
                keyExtractor={(index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        flexDirection: 'row',
        height: 135
    },
});

