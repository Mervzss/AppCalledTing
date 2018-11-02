import React, { Component } from 'react'
import { View, StyleSheet, Switch } from 'react-native'

//Ting UI import
import { TingBigText, TingBackHeader, TingButtonNext, TingInput, TingSmallText } from '../../../components/CustomUI'

class EnterEmailView extends Component {
    static navigationOptions = {
        header: null
    }
    state = { email: '' }

    onemailChange = (email) => {
        this.setState({
            email: email
        })
    }

    render() {
        return (
            <View style={styles.headContainer}>
                <TingBackHeader onPress={() => this.props.navigation.goBack()} />
                <View style={styles.innercontainer}>
                    <TingBigText>And, your email?</TingBigText>
                    <TingInput textTitle='EMAIL' keyboardType='email-address' value={this.state.email} onChangeText={this.onemailChange} />
                    <View style={styles.middleContainer}>
                        <View style={{ width: '75%' }}>
                            <TingSmallText>
                                Id like to receive marketing and policy
                                communications from ting and its
                                partners.
            </TingSmallText>
                        </View>
                        <View style={{ width: '15%' }}>
                            <Switch style={{ alignSelf: 'flex-start' }} />
                        </View>
                    </View>
                    {/* Button Next Visible when Texts are not empty */}
                    {(this.state.email !== '' ? true : false) && (<TingButtonNext size={50} color='white' style={styles.nextStyle} onPress={() => this.props.navigation.navigate('SignUpThree')} />)}

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
    },
    middleContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
export default EnterEmailView;