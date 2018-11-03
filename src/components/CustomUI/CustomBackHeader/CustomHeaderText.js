import React from 'react'
import { Text } from 'react-native'
import { Left, Header } from 'native-base'
import { TingButtonBack } from '../IconByPlatfrom/IconByPlatfrom'

export const TingHeaderText = props => {
    return (
        <Header style={{ backgroundColor: 'white', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 40, color: '#585858', fontWeight: 'bold', paddingLeft: '5%' }}>{props.children}</Text>
        </Header>
    )
}
