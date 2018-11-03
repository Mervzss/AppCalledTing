import React from 'react'

import { Left, Header } from 'native-base'
import { TingButtonBack } from '../IconByPlatfrom/IconByPlatfrom'

export const TingBackHeader = props => {
    return (
        <Header style={{ backgroundColor: '#00A795', justifyContent: 'flex-start' }}>
            <Left style={{ paddingLeft: '3%' }}>
                <TingButtonBack size={30} color='white' {...props} />
            </Left>
        </Header>
    )
}

