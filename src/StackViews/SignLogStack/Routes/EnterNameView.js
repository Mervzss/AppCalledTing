import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

//Ting UI imports
import { TingBigText, TingBackHeader, TingInput, TingButtonNext } from '../../../components/CustomUI'

class EnterNameView extends Component {
    static navigationOptions = {
        header: null
    }
    state = { firstName: "", lastName: "" }

    onUpdateText = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    checkTextState = (fname, lname) => {
        return fname !== '' && lname !== '' ? true : false
    }
    render() {
        return (
            <View style={styles.headContainer}>
                <TingBackHeader onPress={() => this.props.navigation.goBack()} />
                <View style={styles.innercontainer}>
                    <TingBigText>What is your name?</TingBigText>
                    <TingInput textTitle='FIRST NAME' value={this.state.firstName} onChangeText={(val) => this.onUpdateText('firstName', val)} />
                    <TingInput textTitle='LAST  NAME' value={this.state.lastName} onChangeText={(val) => this.onUpdateText('lastName', val)} />
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