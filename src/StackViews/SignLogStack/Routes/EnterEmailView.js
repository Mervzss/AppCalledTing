import React,{Component} from 'react'
import {View,Text , Button} from 'react-native'
// import { Button } from 'native-base';

class EnterEmailView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View>
            <Text>EnterEmail View</Text>
            <Button title="next"  />
        </View>
    )
}
}

export default EnterEmailView;