import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../Components/Button';
import Divider from '../../Components/Divider';
import Header from '../../Components/header';
import Input from '../../Components/Input';

export default function Register({navigation}) {
    return (
        <View style={styles.pageWrapper}>
            <Header title='Daftar Akun' onPress={() => navigation.goBack()} />

            <View style={styles.wrapper}>   
                <Input inputLabel='Full name'/>
                <Divider height={24} />
                <Input inputLabel='Profession'/>
                <Divider height={24} />
                <Input inputLabel='Email Address'/>
                <Divider height={24} />
                <Input inputLabel='Password'/>
                <Divider height={40} />
                <Button title='Continue' onPress={() => navigation.navigate('UploadFoto')}/>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    pageWrapper:{
        backgroundColor:'#ffffff',
        flex:1
    },
    wrapper:{
        padding:40,
        paddingTop:0
    }
})
