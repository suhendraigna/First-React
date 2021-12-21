import React,{useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppLogo from '../../src/icon/logo.svg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [])
  return (
  <View style={styles.wrapper}>
    <AppLogo />
    <Text style={styles.appName}>My Doctor</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    alignItems:'center',
    justifyContent: 'center',
    flex:1
  },
  appName:{
    fontSize:20,
    fontFamily:'Nunito-SemiBold',
    color:'#112340',
    marginTop:20
  }
});

export default Splash;