import React from 'react';
import {View, Platform} from 'react-native';
import AppRoute from './Navigation/NavigationRoutes';

const App = () => {
  return (
    <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 18 : 0}}>
      <AppRoute />
    </View>
  );
};

export default App;
