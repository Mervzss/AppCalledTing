import React from 'react'
import { Text } from 'react-native'
import { Header } from 'native-base'

export const TingHeaderText = props => {
    return (
        <Header style={{ backgroundColor: 'white', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 40, color: '#585858', fontWeight: 'bold', paddingLeft: '3%' }}>{props.children}</Text>
        </Header>
    )
}
