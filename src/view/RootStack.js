import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Register from './Register';
import Login    from './Login';
import Index    from './Index';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Index"      component={Index}/>
        <RootStack.Screen name="Login"      component={Login}/>
        <RootStack.Screen name="Register"   component={Register}/>
    </RootStack.Navigator>
);

export default RootStackScreen;