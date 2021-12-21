import React from 'react'
import {StyleSheet, Text, View, ImageBackground} from 'react-native'
import AppLogo from '../../src/icon/logo.svg';
import Button from '../../Components/Button';
import Background from '../../src/image/bg.png';
import Divider from '../../Components/Divider';

export default function GetStarted({navigation}) {
    return (
        <ImageBackground source={Background} style={styles.wrapper}>
            <View>
                <AppLogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View>
                <Button title='Get Started' onPress={() => navigation.navigate('Register')} />
                <Divider height={16} />
                <Button title='Sign In' type='secondary' onPress={() =>  navigation.navigate('Login')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding:40,
        backgroundColor:'yellow',
        justifyContent:'space-between',
        flex:1
    },
    title:{
        fontSize:28,
        color:'#ffffff',
        marginTop:91,
        fontFamily:'Nunito-SemiBold'
    }
})
