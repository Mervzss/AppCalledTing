import React from 'react'
import {Platform} from 'react-native'

// import {Icon} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons'

export const ButtonNext = props =>(
<Icon name={Platform.OS === 'android' ? "md-arrow-dropright":"ios-arrow-dropright"}  {...props}/>
)

export const ButtonBack = props =>(
<Icon name={Platform.OS === 'android' ? "md-arrow-back":"ios-arrow-back"} {...props}/>
)