import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppLogo from '../../src/icon/logo.svg';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import TextLink from '../../Components/TextLink';
import Divider from '../../Components/Divider';

export default function index({navigation}) {
    return (
        <View style={styles.wrapper}>
            <View>
                <AppLogo />
                <Text style={styles.textTitle}>Masuk dan mulai berkonsultasi</Text>

                <Input inputLabel='Email Address'/>
                <Divider height={24}/>
                <Input inputLabel='Password'/>
                <Divider height={10}/>
                <TextLink title='Forgot My Password' size={12} />
                <Divider height={40} />
                <Button title='Sign In' />
                <Divider height={30} />
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <TextLink title='Create A New Account' size={16} align='center' />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        padding:40,
        flex:1,
        justifyContent:'space-between',
        backgroundColor:'#ffffff'
    },
    textTitle:{
        fontSize:20,
        fontFamily:'Nunito-SemiBold',
        color:'#112340',
        width:153,
        marginTop:40,
        marginBottom:40
    },
})
