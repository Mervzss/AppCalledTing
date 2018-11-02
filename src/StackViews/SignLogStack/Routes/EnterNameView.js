import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
//Custom Components
import {TingBigText,TingBackHeader,TingInput,TingButtonNext} from '../../../components/CustomUI'


class EnterNameView extends Component{
    static navigationOptions ={
        header: null
    }
render(){
    return(
        <View style={styles.headContainer}>
        <TingBackHeader />
            <View style={styles.innercontainer}>
                <TingBigText>What is your name?</TingBigText>
                <TingInput textTitle='FIRST NAME' />
                <TingInput textTitle='LAST  NAME' />
                <TingButtonNext size={50} color='white' style={styles.nextStyle} />
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