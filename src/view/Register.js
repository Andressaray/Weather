import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import Icon         from 'react-native-vector-icons/FontAwesome5';
import AwesomeAlert from 'react-native-awesome-alerts';
import auth         from  '@react-native-firebase/auth'

import { AuthContext }  from '../components/context'
import backgroundImage  from '../assets/images/weather2.jpg';
import {globalStyles}   from '../components/globalStyles';

export default function Register({navigation}) {
  const [name, setName]             = useState('')
  const [email, setEmail]           = useState('')
  const [password, setPassword]     = useState('')
  const [alertText, setAlertText]   = useState(false)
  const [message, setMessage]       = useState('')
  const { signUp }                  = React.useContext(AuthContext)

  const handleRegister = () => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(email)) {
      setMessage('Información')
      setAlertText('No es un correo valido')
      return
    }
    if (password.length < 6) {
      setMessage('Información')
      setAlertText('Contraseña muy corta')
      return
    }
    register()
  }

  const register = async () => {
    try {
        const response = await auth().createUserWithEmailAndPassword(email, password)
        if(response && response.user){
          setMessage('Hola')
          setAlertText('Bienvenido a Weather')
          setTimeout(() => {
            signUp(JSON.stringify(response))
          }, 1500);
        }
    } catch (error) {
      setMessage('Error')
      setAlertText('Error al crear una cuenta')
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
          setAlertText(false);
        }}
      />
      <ImageBackground
        source={backgroundImage}
        style={globalStyles.imageBackground}
        imageStyle={{resizeMode: 'cover', alignSelf: 'flex-end'}}>
        <View style={{position: 'absolute', top: 220, bottom: 0}}>
          <Icon
            name="user"
            solid
            size={20}
            color="#000000"
            style={globalStyles.iconLogin}
          />
          <TextInput
            value={name}
            onChangeText={(val) => setName(val)}
            placeholder="Nombre"
            style={globalStyles.inputLogin}
          />
        </View>
        <View style={{position: 'absolute', top: 290, bottom: 0}}>
          <Icon
            name="envelope"
            solid
            size={20}
            color="#000000"
            style={globalStyles.iconLogin}
          />
          <TextInput
            value={email}
            onChangeText={(val) => setEmail(val)}
            keyboardType="email-address"
            placeholder="Correo"
            style={globalStyles.inputLogin}
          />
        </View>
        <View style={{position: 'absolute', top: 360, bottom: 0}}>
          <Icon
            name="lock"
            solid
            size={20}
            color="#000000"
            style={globalStyles.iconLogin}
          />
          <TextInput
            value={password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry
            placeholder="Contraseña"
            style={globalStyles.inputLogin}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 430,
            bottom: 0,
            alignSelf: 'center',
          }}>
          <TouchableOpacity style={[globalStyles.button, globalStyles.info]} onPress={() => handleRegister()}>
            <Text style={globalStyles.textCenter}>Registrarme</Text>
            <Icon
              name="sign-in-alt"
              solid
              size={20}
              color="#000000"
              style={globalStyles.iconButton}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 500,
            bottom: 0,
            alignSelf: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#f0f0f0'}}>¿Tienes una cuenta?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
