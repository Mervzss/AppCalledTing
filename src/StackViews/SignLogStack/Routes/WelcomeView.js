import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import TingButton from '../../../components/CustomButtons/DefaultTingButton/TingButton'
import BigTingText from '../../../components/CustomText/BigTingText'

class WelcomeView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View style={styles.container}>
        <BigTingText>Welcome to Ting</BigTingText>
            <TingButton  >Login</TingButton>
            <TingButton onPress={() => this.props.navigation.navigate('SignUpOne')} invert={true}>Sign Up</TingButton>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00A795',
    },
  });
  
export default WelcomeView;