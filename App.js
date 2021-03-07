/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React, {useEffect} from 'react'
import { View, ActivityIndicator }  from 'react-native'

import { NavigationContainer }      from '@react-navigation/native'
import { createDrawerNavigator }    from '@react-navigation/drawer'
import AsyncStorage from '@react-native-community/async-storage'

import { AuthContext }              from './src/components/context'
import RootStackScreen              from './src/view/RootStack'
import { DrawerContent }            from './src/view/DrawerContent';
import TapBottomContent             from './src/view/TapBottomContent'


export default () => {

  const Drawer = createDrawerNavigator()

  const initialState = {
    user: null,
    isLoading: false
  }


  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          user: action.user,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          user: action.user,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          user: action.user,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          user: action.user,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialState);

  const authContext = React.useMemo(() => ({
    signIn: async(user) => {      
      try {
        await AsyncStorage.setItem('user', user);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', user });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('user');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: async (user) => {
      try {
        await AsyncStorage.setItem('user', user);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'REGISTER', user });
    },
    }), []);

  useEffect(() => {
    setTimeout(async() => {
      let user = null;
      try {
        user = await AsyncStorage.getItem('user');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', user });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.user ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="Home" component={TapBottomContent} />
            </Drawer.Navigator>
            )
          :
            <RootStackScreen />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
