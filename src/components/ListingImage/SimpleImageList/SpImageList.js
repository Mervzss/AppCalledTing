import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SimpleBaseItem } from './SpBaseItem'

export const SimpleImageList = props => {
    return (
        <FlatList
            data={props.getData}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            style={{ paddingLeft: '2%', paddingTop: '3%' }}
            renderItem={(value) =>
                (

                    <SimpleBaseItem imgSource={value.item.img} headText={value.item.name} />
                )
            }
            keyExtractor={(index) => index.toString()}
        />
    )
}

