import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconBackDark from '../../src/icon/arrow_back_24px.svg';

export default function IconOnly({onPress, icon}) {
    const Icon = () => {
        if(icon === 'back-dark'){
            return <IconBackDark />
        }
        if(icon === 'back-light'){
            return <IconBackDark />
        }

        return <IconBackDark />
    }
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Icon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
