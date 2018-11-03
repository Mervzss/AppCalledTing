import React from 'react'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const TingButtonNext = props => {
    return (
        <Icon name={Platform.OS === 'android' ? "md-arrow-dropright" : "ios-arrow-dropright"}  {...props} />
    )
}

export const TingButtonBack = props => {
    return (
        <Icon name={Platform.OS === 'android' ? "md-arrow-back" : "ios-arrow-back"} {...props} />
    )
}