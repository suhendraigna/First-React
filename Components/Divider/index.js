import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Divider({height, width}) {
    return (
        <View style={styles.size(height, width)}></View>
    )
}

const styles = StyleSheet.create({
    size: (height, width)=> ({
        height:height,
        width:width
    })
})
