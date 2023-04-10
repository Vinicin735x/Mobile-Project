import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import{ScreenLogin, ScreenCadastrar} from "../screens"

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Login" component={ScreenLogin} />
       <Stack.Screen name="Cadastro" component={ScreenCadastrar} />
     
    </Stack.Navigator>
  );
}