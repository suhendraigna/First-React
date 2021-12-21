import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TextLink({title,size, align}) {
    return (
        <View>
            <Text style={styles.TextLink(size, align)}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    TextLink: (size,align)=> ({
        fontSize: size,
        color:'#7D8797',
        fontFamily:'Nunito-Regular',
        textDecorationLine:'underline',
        textAlign:align,
    })
})

