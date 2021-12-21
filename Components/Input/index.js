import React from 'react'
import { StyleSheet,Text, TextInput, View } from 'react-native'

export default function Input({inputLabel}) {
    return (
        <View>
            <Text style={styles.inputLable}>{inputLabel}</Text>
            <TextInput style={styles.inputForm}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputForm:{
        borderWidth:1, 
        borderColor:'#E9E9E9', 
        borderRadius:10,
        padding:12,
        fontFamily:'Nunito-Regular',
        color:'#112340'
    },
    inputLable:{
        fontSize:16,
        fontFamily:'Nunito-Regular',
        color:'#7D8797',
        marginBottom:6
    },
})

