import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Header from '../../Components/header';
import NullPhotoIcon from '../../src/icon/user_photo_null.png';
import AddPhotoIcon from '../../src/icon/btn_add_photo.svg';
import Button from '../../Components/Button';
import TextLink from '../../Components/TextLink';
import Divider from '../../Components/Divider';

export default function UploadFoto({navigation}) {
    return (
        <View style={styles.pageWrapper}>
            <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
            <View style={styles.contentWrapper}>
                <View style={styles.topItem}>
                    <View style={styles.photoWrapper}>
                        <Image source={NullPhotoIcon} style={styles.photo} />
                        <TouchableOpacity style={styles.addPhotoIcon}>
                            <AddPhotoIcon/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textName}>Shayna Melinda</Text>
                    <Text style={styles.textTitle}>Product Designer</Text>
                </View>
                <View>
                    <Button title='Upload and Continue' type='disable'/>
                    <Divider height={30} />
                    <TextLink title ="Skip for this" align="center" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageWrapper:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    contentWrapper:{
        paddingHorizontal:40,
        paddingBottom:40,
        flex:1,
        justifyContent:'space-between'
    },
    topItem:{
        alignItems:'center',
        
    },
    photoWrapper:{
        height:130,
        width:130,
        borderWidth:1,
        borderRadius:130/2,
        borderColor:'#E9E9E9',
        alignItems:'center',
        justifyContent:'center',
        marginTop:173,
        position:'relative'
    },  
    photo:{
        height:110,
        width:110
    },
    addPhotoIcon:{
        position:'absolute',
        right:0,
        bottom:0
    },  
    textName:{
        marginTop:26,
        fontFamily:'Nunito-Regular',
        fontSize:24,
        color:'#112340',
    },
    textTitle:{
        fontFamily:'Nunito-Light',
        fontSize:18,
        color:'#7D8797',
        textAlign:'center',
    }
})
