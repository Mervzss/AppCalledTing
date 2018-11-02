import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

//Ting UI imports
import { TingBigText, TingBackHeader, TingInput, TingButtonNext, TingSmallText } from '../../../components/CustomUI'
class EnterBDayView extends Component {
    static navigationOptions = {
        header: null
    }
    state = { birthday: '' }

    onbirthdayChange = bday => {
        this.setState({
            birthday: bday
        })
    }
    render() {
        return (
            <View style={styles.headContainer}>
                <TingBackHeader onPress={() => this.props.navigation.goBack()} />
                <View style={styles.innercontainer}>
                    <TingBigText>When is your Birthday?</TingBigText>
                    <TingSmallText>
                        You must be at least 18 years old to use Ting.
                        Other people won't see your Birthday
                </TingSmallText>
                    <TingInput textTitle='BIRTHDAY' placeholder='10/5/2018/' placeholderTextColor='white' keyboardType='numeric'
                        value={this.state.birthday} onChangeText={this.onbirthdayChange} />
                        {/* Button Next Visible when Texts are not empty */}
                    {(this.state.birthday !== '' ? true : false) && (<TingButtonNext size={50} color='white' style={styles.nextStyle} onPress={() => this.props.navigation.navigate('Home')} />)}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    headContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#00A795',
    },
    innercontainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A795',
    },
    nextStyle: {
        alignSelf: 'flex-end',
        paddingRight: '12%'
    }
});

export default EnterBDayView;