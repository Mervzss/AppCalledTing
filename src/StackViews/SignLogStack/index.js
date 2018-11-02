import {createStackNavigator} from 'react-navigation'

// Routes imports
import WelcomeView from './Routes/WelcomeView'
import EnterNameView from './Routes/EnterNameView'
import EnterEmailView from './Routes/EnterEmailView'
import EnterBDayView from './Routes/EnterBDayView'

const SignLogStack = createStackNavigator({
    Home: WelcomeView,
    SignUpOne: EnterNameView,
    SignUpTwo: EnterEmailView,
    SignUpThree: EnterBDayView
})

export default SignLogStack;