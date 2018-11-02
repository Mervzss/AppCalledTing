import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

class EnterBDayView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View>
            <Text>EnterBDay View</Text>
            <Button title="next"  />
        </View>
    )
}
}

export default EnterBDayView;