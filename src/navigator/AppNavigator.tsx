import * as React from 'react';
import {

} from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { Button } from '@react-navigation/elements';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import { TypeProps } from '../types/types';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = (props: TypeProps) => {
  console.log('[AppNavigator][Log] - AppNavigator mounted:', props);
  return (
    <AppDrawer />
  );
};

export default AppNavigator;