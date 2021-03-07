import React from 'react'
import { TouchableOpacity, 
    View, 
    Text, 
    ImageBackground }               from 'react-native'
import { globalStyles } from '../components/globalStyles'
import backgroundImage  from '../assets/images/weather3.jpg'    

export default function Index({ navigation }) {
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
