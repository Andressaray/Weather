import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    textCenter:{
        textAlign: 'center',
        fontSize: 17,
        color: '#f0f0f0'
    },
    input:{
        width: 270,
        height: 63,
        borderRadius: 50,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    },
    button: {
        borderRadius: 25,
        borderWidth: 0,
        width: 250,
        height: 55,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 5,
        justifyContent: 'center',
    },
    primary: {
        backgroundColor: '#03a9f4'
    },
    danger: {
        backgroundColor: '#d32f2f'
    },
    success: {
        backgroundColor: '#4db6ac'
    },
    warning: {
        backgroundColor: '#ffab40'
    },
    dark: {
        backgroundColor: '#212121'
    },
    info:{
        backgroundColor: '#2196f3'
    }, 
    imageBackground:{
        flex: 1,
        resizeMode: 'cover',
        // justifyContent: 'center',
        alignSelf: 'flex-end',
        width: '100%'
    },
    icon: {
        position: 'absolute',
        top: 265,
        left: 66,
        zIndex: 1,
        borderColor: '#f0f0f1'
    },
    inputText: {
        flex: 1,
        height: 56,
        width: 300,
        paddingLeft: 45,
        position: 'absolute',
        top: 250,
        borderRadius: 50,
        backgroundColor: '#fff',
        color: '#424242',
    },
    iconLogin:{
        position: 'absolute', 
        top: 15, 
        left: 37,
        zIndex: 1
    },
    inputLogin:{
        width: WIDTH - 55,
        height: 55,
        fontSize: 16,
        paddingLeft: 45,
        paddingRight: 20,
        borderRadius: 25,
        marginHorizontal: 25,
        backgroundColor: '#f0f0f0'
    },
    iconButton: {
        position: 'absolute', 
        top: 17, 
        left: 185,
    }
})