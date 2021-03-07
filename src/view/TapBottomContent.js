import React from 'react';

import {createMaterialBottomTabNavigator}   from '@react-navigation/material-bottom-tabs';
import {createStackNavigator}               from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Home     from './Home';
import Weather  from './Weather'

  const HomeStack       = createStackNavigator();
  const DetailsStack    = createStackNavigator();
  const Tab             = createMaterialBottomTabNavigator();

  const TapBottomContent = () => (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Weather"
        component={Weather}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (
            <Icon name="cloud" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="cloud" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  export default TapBottomContent;

    const HomeStackScreen = ({ navigation }) => (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={Home} options={{
                title:'Overview',
                headerLeft: () => (
                    <Icon.Button name="artstation" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }} 
            />
        </HomeStack.Navigator>
    );

    const DetailsStackScreen = ({ navigation }) => (
        <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Home" component={Home} options={{
                headerLeft: () => (
                    <Icon.Button name="audible" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
            }} />
        </DetailsStack.Navigator>
    );
          
