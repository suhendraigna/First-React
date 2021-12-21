import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Divider from '../Divider';
import Button from '../Button'

export default function Header({title, onPress}) {
    return (
        <View style={styles.wrapper}>
            <Button type='icon-only' icon='back-dark' onPress={onPress} />
            <Text style={styles.titleText}>{title}</Text>
            <Divider width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        paddingHorizontal:16,
        paddingVertical:30,
        flexDirection:'row',
        alignItems:'center'
    },
    titleText:{
        fontFamily:'Nunito-SemiBold',
        fontSize:20,
        color:'#112340',
        flex:1,
        textAlign:'center'
    }
})
