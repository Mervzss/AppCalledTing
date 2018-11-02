import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

class LogInView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View>
            <Text>LogIn View</Text>
            <Button title="next"  />
        </View>
    )
}
}

export default LogInView;