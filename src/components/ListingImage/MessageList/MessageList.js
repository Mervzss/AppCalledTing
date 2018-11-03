import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { BaseList } from './BaseList'

export const MessageList = props => {
    return (
        <FlatList
            data={props.getData}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            style={{ flex: 1, width: '100%' }}
            renderItem={(value) =>
                (
                    <BaseList imgSource={value.item.img} name={value.item.name} date={value.item.date} content={value.item.msg} />
                )
            }
            keyExtractor={(index) => index.toString()}
        />
    )
}