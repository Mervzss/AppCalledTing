import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

//Ting UI import
import { TingBigText, TingBackHeader, TingInput, TingButtonNext } from '../../../components/CustomUI'

class LogInView extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        securePass: true
    }
    onemailChange = (email) => {
        this.setState({
            email: email
        })
    }
    onpasswordChange = (pass) => {
        this.setState({
            password: pass
        })
    }
    checkTextState = (email, pass) => {
        if (email !== '' && pass !== '') {
            return true
        }
        else {
            return false;
        }
    }
    toggle = () => {
        this.setState({
            securePass: !this.state.securePass
        })
    }
    render() {
        return (
            <View style={styles.headContainer}>
                <TingBackHeader onPress={() => this.props.navigation.goBack()} />
                <View style={styles.innercontainer}>
                    <TingBigText>Login</TingBigText>
                    <TingInput textTitle='EMAIL' value={this.state.email} onChangeText={this.onemailChange} keyboardType={"numeric"} />
                    <TingInput textTitle='PASSWORD' passToggle={true} value={this.state.password} onChangeText={this.onpasswordChange}
                        onShowPress={this.toggle} secureTextEntry={this.state.securePass} />
                    {/* Button Next Visible when Texts are not empty */}
                    {this.checkTextState(this.state.email, this.state.password) && (<TingButtonNext size={50} color='white' style={styles.nextStyle}
                        onPress={() => this.props.navigation.navigate('Main')} />)}
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

export default LogInView;