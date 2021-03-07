import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import Icon         from 'react-native-vector-icons/FontAwesome5'
import auth         from  '@react-native-firebase/auth'
import AwesomeAlert from 'react-native-awesome-alerts'

import { AuthContext } from '../components/context'
import backgroundImage from '../assets/images/weather.png'
import { globalStyles } from '../components/globalStyles'

export default function Login({navigation}) {

    const [email, setEmail]         = useState('')
    const [password, setPassword]   = useState('')
    const [alertText, setAlertText] = useState(false)
    const [message, setMessage]     = useState('')
    const { signIn }                = React.useContext(AuthContext)

    const handleLogin = () => {
        const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!reg.test(email)){
            setAlertText('No es un correo valido')
            return
        }
        if(password.length < 6){
            setAlertText('Contraseña muy corta')
            return
        }
        login()
    }

    const login = async () => {
        try {
            const response = await auth().signInWithEmailAndPassword(email, password)
            if(response && response.user){
                setMessage('Hola')
                setAlertText('Bienvenido de nuevo a Weather')
                setTimeout(() => {
                    signIn(JSON.stringify(response))
                }, 1500);
            }
        } catch (error) {
          setMessage('Error')
          setAlertText('Error al iniciar sesion')
        }
    }


    return (
        <View style={globalStyles.container}>
            <AwesomeAlert
                show={Boolean(alertText)}
                showProgress={false}
                title={message}
                message={alertText || ''}
                onDismiss={() => {
                    setAlertText(false)
                }}
            />
            <ImageBackground source={backgroundImage} style={globalStyles.imageBackground}>
               <View style={{ position: 'absolute', top: 280, bottom: 0 }}>
                    <Icon name='envelope' solid size={20} color="#000000" style={globalStyles.iconLogin} />
                    <TextInput
                        value={email} 
                        keyboardType="email-address"
                        placeholder="Correo"
                        autoCompleteType="email"
                        onChangeText={(val) => setEmail(val)}
                        style={globalStyles.inputLogin} 
                    />
               </View>
               <View style={{ position: 'absolute', top: 360, bottom: 0 }}>
                    <Icon name='lock' solid size={20} color="#000000" style={globalStyles.iconLogin} />
                    <TextInput
                        value={password} 
                        onChangeText={(val) => setPassword(val)}  
                        autoCompleteType="password" 
                        secureTextEntry 
                        placeholder="Contraseña"
                        style={globalStyles.inputLogin}
                    />
               </View>
               <View style={{ position: 'absolute', top: 430, bottom: 0 , alignSelf: 'center'}}>
                    <TouchableOpacity style={[globalStyles.button, globalStyles.info]} onPress={() => handleLogin()}>
                        <Text style={globalStyles.textCenter}>
                            Iniciar Sesión 
                        </Text>
                            <Icon name="sign-in-alt" solid size={20} color="#000000" style={globalStyles.iconButton}/>
                    </TouchableOpacity>
               </View>
               <View style={{position: 'absolute', top: 500, bottom: 0 , alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#f0f0f0' }}>¿No tienes una cuenta?</Text>
                    </TouchableOpacity>
               </View>
            </ImageBackground>
        </View>
    )
}
