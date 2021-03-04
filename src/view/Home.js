import React from 'react'
import { View, Text } from 'react-native'
import Icon                         from 'react-native-vector-icons/FontAwesome5'
export default function Home({navigation}) {
    return (
        <View>
            <Text>Bienvenido a LookWeather</Text>
            <Text>Aquí podrás saber el clima de las ciudades de toda America</Text>
        </View>
    )
}
