import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Splash from '../../pages/Splash';
import GetStarted from '../../pages/GetStarted';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import UploadFoto from '../../pages/UploadFoto';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="UploadFoto" component={UploadFoto} options={{headerShown:false}} />
    </Stack.Navigator>
  );
}

export default Router;