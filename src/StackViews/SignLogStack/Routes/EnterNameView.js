import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
//Custom Components
import DefaultTingInput from '../../../components/CustomTextInput/DefaultTingInput'
import BigTingText from '../../../components/CustomText/BigTingText'
// Icon Button
import {ButtonNext} from '../../../components/IconByPlatfrom/IconByPlatfrom'
// import BackHeader from '../../../components/CustomBackHeader/CustomBackHeader'
//  import {BackHeader} from '../../../components'

class EnterNameView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View style={styles.headContainer}>
        <View style={styles.innercontainer}>
        <BigTingText>What is your name?</BigTingText>
        <DefaultTingInput textTitle='FIRST NAME'/>
        <DefaultTingInput textTitle='LAST  NAME'/>
        <ButtonNext size={50} color='white' style={styles.nextStyle}/>
        </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    headContainer:{
        flex:1,
        width:'100%'
    },
    innercontainer: {
      flex: 1,
      width:'100%',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor: '#00A795',
    },
    nextStyle:{
        alignSelf:'flex-end',
        paddingRight: '12%'
    }
  });
export default EnterNameView;