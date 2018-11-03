import {createBottomTabNavigator} from 'react-navigation'
import ExploreView from './Routes/ExploreView'
import SavedView from './Routes/SavedView'
import TripsView from './Routes/TripsView'
import InboxView from './Routes/InboxView'
import ProfileView from './Routes/ProfileView'

export const MainContentTab = createBottomTabNavigator({
    Explore:ExploreView,
    Saved:SavedView,
    Trips:TripsView,
    Inbox:InboxView,
    Profile:ProfileView
},
{
    initialRouteName: 'Explore',
    tabBarOptions:{
        activeTintColor:'#ff3333',
        labelStyle:{
            fontWeight:'bold'
        },
        tabStyle:{
            borderTopWidth:1,
            borderColor:'#D8D8D8'
        }
        
    }
}
)

export default MainContentTab;