import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

//Ting UI imports
import { TingBigText, TingBackHeader, TingInput, TingButtonNext } from '../../../components/CustomUI'

class EnterNameView extends Component {
    static navigationOptions = {
        header: null
    }
    state = { firstName: "", lastName: "" }

    onfirstnameChange = fname => {
        this.setState({
            firstName: fname
        })
    }
    onlastnameChange = lname => {
        this.setState({
            lastName: lname
        })
    }
    checkTextState = (fname, lname) => {
        if (fname !== '' && lname !== '') {
            return true
        }
        else {
            return false;
        }
    }
    render() {
        return (
            <View style={styles.headContainer}>
                <TingBackHeader onPress={() => this.props.navigation.goBack()} />
                <View style={styles.innercontainer}>
                    <TingBigText>What is your name?</TingBigText>
                    <TingInput textTitle='FIRST NAME' value={this.state.firstName} onChangeText={this.onfirstnameChange} keyboardType={"numeric"} />
                    <TingInput textTitle='LAST  NAME' value={this.state.lastName} onChangeText={this.onlastnameChange} />
                    {/* Button Next Visible when Texts are not empty */}
                    {this.checkTextState(this.state.firstName, this.state.lastName) && (<TingButtonNext size={50} color='white' style={styles.nextStyle}
                        onPress={() => this.props.navigation.navigate('SignUpTwo')} />)}
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
export default EnterNameView;