import React from 'react';
import { StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import IconOnly from './IconOnly';


export default function Button({type, title, onPress, icon}) {
    if(type === 'icon-only'){
        return(
            <IconOnly icon={icon} onPress={onPress}/>
        )    
    }

    if(type === "disable"){
        <Text style={styles.text(type)}>{title}</Text>
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress} >
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? '#ffffff' : type === 'disable' ? '#EDEEF0' : '#0BCAD4',
        paddingVertical:10,
        borderRadius:10,
    }),
    text: (type) => ({
        fontSize:18, 
        fontFamily:'Nunito-SemiBold',
        textAlign:'center',
        color: type === 'secondary' ? '#112340' : type == 'disable' ? '#B1B7C2' : '#ffffff'
    })
})
