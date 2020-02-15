import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';

import FrontPage from '../src/NewsSwip';
import WebView from '../src/WebView';

const Routes = createStackNavigator(
    {
        Home: {
            screen: FrontPage,
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
        initialRouteName: 'FrontPageScreen',
    }
);
const AppRoutes = createAppContainer(Routes);
export default AppRoutes;