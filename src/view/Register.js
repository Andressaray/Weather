import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import backgroundImage from '../assets/images/weather2.jpg'
import { globalStyles } from '../components/globalStyles'

export default function Register({navigation}) {
    return (
        <View style={globalStyles.container}>
        <ImageBackground source={backgroundImage} style={globalStyles.imageBackground} imageStyle={{
    resizeMode: "cover",
    alignSelf: "flex-end"
  }}>
        <View style={{ position: 'absolute', top: 220, bottom: 0 }}>
                <Icon name='user' solid size={20} color="#000000" style={globalStyles.iconLogin} />
                <TextInput  
                    placeholder="Nombre"
                    style={globalStyles.inputLogin}
                />
           </View>
           <View style={{ position: 'absolute', top: 290, bottom: 0 }}>
                <Icon name='envelope' solid size={20} color="#000000" style={globalStyles.iconLogin} />
                <TextInput 
                    keyboardType="email-address"
                    placeholder="Correo" 
                    style={globalStyles.inputLogin} 
                />
           </View>
           <View style={{position: 'absolute', top: 360, bottom: 0}}>
                <Icon name='lock' solid size={20} color="#000000" style={globalStyles.iconLogin} />
                <TextInput 
                    secureTextEntry 
                    placeholder="Contraseña"
                    style={globalStyles.inputLogin}
                />
           </View>
           <View style={{position: 'absolute', top: 430, bottom: 0, alignSelf: 'center'}}>
                <TouchableOpacity style={[globalStyles.button, globalStyles.info]}>
                    <Text style={globalStyles.textCenter}>
                        Registrarme
                    </Text>
                        <Icon name="sign-in-alt" solid size={20} color="#000000" style={globalStyles.iconButton}/>
                </TouchableOpacity>
           </View>
           <View style={{position: 'absolute', top: 500, bottom: 0 , alignSelf: 'center' }}>
                <TouchableOpacity>
                    <Text style={{ color: '#f0f0f0' }}>¿Tienes una cuenta?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
    )
}
