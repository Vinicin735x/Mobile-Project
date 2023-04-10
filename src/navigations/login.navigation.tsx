import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import{ScreenLogin, ScreenCadastrar} from "../screens"
type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined 
};
type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigation
}
export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
       <Stack.Screen name="Login" component={ScreenLogin} />
       <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
     
    </Stack.Navigator>
  );
}