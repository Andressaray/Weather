import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple
} from 'react-native-paper';
import Icon             from 'react-native-vector-icons/FontAwesome5'
import AwesomeAlert     from 'react-native-awesome-alerts';
import auth             from  '@react-native-firebase/auth'

import { AuthContext }  from '../components/context';

export function DrawerContent( props ) {
    const [alertText, setAlertText] = useState(false)
    const { signOut }               = React.useContext(AuthContext);

    const closeSession = () => {
        try {
            auth().signOut()
                .then((r) => {
                    console.log('r', r);
                    setAlertText('Has cerrado sesión')
                    setTimeout(() => {
                        signOut()
                    }, 1500);
                })
            
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <View style={{flex:1}}>
        <AwesomeAlert
            show={Boolean(alertText)}
            showProgress={false}
            title='Exito'
            message={alertText || ''}
            onDismiss={() => {
                setAlertText(false);
            }}
        />
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://bellard.org/bpg/2.png'
                            }}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>John Doe</Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="home" 
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                                name="user" 
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                {/* <Switch value={paperTheme.dark}/> */}
                                <Text>dasd</Text>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                    <Icon 
                        name="arrow-circle-left" 
                        color={color}
                        size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => closeSession()}
            />
        </Drawer.Section>
    </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });

