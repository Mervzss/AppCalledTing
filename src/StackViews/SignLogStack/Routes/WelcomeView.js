import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import {TingDefaultButton,TingBigText} from '../../../components/CustomUI'
class WelcomeView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View style={styles.container}>
        <TingBigText>Welcome to Ting</TingBigText>
            <TingDefaultButton  >Login</TingDefaultButton>
            <TingDefaultButton onPress={() => this.props.navigation.navigate('SignUpOne')} invert={true}>Sign Up</TingDefaultButton>
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