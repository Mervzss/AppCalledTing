// Default Imports
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {createSwitchNavigator} from 'react-navigation'

// Fix the Warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// Switch Navigator Imports
import SignLogStack from './src/StackViews/SignLogStack'

export default class App extends Component{
  render() {
    return (
      <SwitchScreens/>
    );
  }
}


const SwitchScreens = createSwitchNavigator({
  Initial: SignLogStack
})



