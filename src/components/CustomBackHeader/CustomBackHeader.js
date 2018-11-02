import React from 'react'

import {Left, Header} from 'native-base'
import {ButtonBack} from '../IconByPlatfrom/IconByPlatfrom'

export const BackHeader = props =>(
    <Header style={{ backgroundColor: '#00A795', justifyContent: 'flex-start' }}>
        <Left style={{ paddingLeft: '3%' }}>
            <ButtonBack size={30} color='white' />
        </Left>
    </Header>
)

