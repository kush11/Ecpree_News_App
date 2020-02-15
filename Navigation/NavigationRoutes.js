import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import FrontPage from '../src/NewsSwip';
import WebView from '../src/WebView';
import FirstPage from '../src/FirstPage';
const Routes = createStackNavigator(
    {
        Home: {
            screen: FrontPage,
        },
        FirstPage:{
            screen: FirstPage,
            navigationOptions: {
                gestureEnabled: false,
                headerShown: false,
                title: null
            }
        },
        FrontPageScreen: {
            screen: FrontPage,
            navigationOptions: {
                gestureEnabled: false,
                headerShown: false,
                title: null
            }
        },
        WebView: {
            screen: WebView,
            navigationOptions: {
                gestureEnabled: false,
                headerShown: false,
                title: null
            }
        },
    },
    {
        initialRouteName: 'FirstPage',
    }
);
const AppRoutes = createAppContainer(Routes);
export default AppRoutes;