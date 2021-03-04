/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground }       from 'react-native'
import { NavigationContainer }      from '@react-navigation/native';
import { createStackNavigator }     from '@react-navigation/stack'

import Login    from './src/view/Login';
import Register from './src/view/Register';
import { globalStyles } from './src/components/globalStyles'
import backgroundImage from './src/assets/images/weather3.jpg'

export default () => {

  const Index = ({navigation}) => {
    return (
      <View style={globalStyles.container}>
        <ImageBackground source={backgroundImage} style={globalStyles.imageBackground}>
          <View style={{ marginTop: 320 }}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Login')} 
              style={[globalStyles.button, globalStyles.info]}
              
            >
              <Text style={globalStyles.textCenter}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => navigation.navigate('Register')} 
              style={[globalStyles.button, globalStyles.info, { marginTop: 8}]}
            >
              <Text style={globalStyles.textCenter}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
  const Stack   = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen component={Index}     name="Index" />
        <Stack.Screen component={Login}     name="Login" />
        <Stack.Screen component={Register}  name="Register" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
