import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import{ScreenCamera, ScreenPerfil} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, Entypo } from '@expo/vector-icons';
type DrawerParamList = {
  Perfil: undefined
  Camera: undefined
};
type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, "Perfil">
export type DrawerTypes = {
  navigation: DrawerScreenNavigationProp
}
export function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={ScreenPerfil}
      options={{
        drawerIcon: () => (
          <Ionicons name="person" color={colors.black} size={24} />
        )
      }} 
      />
      <Drawer.Screen name="Camera" component={ScreenCamera}
      options={{
        drawerIcon: () => (
          <Entypo name="camera" color={colors.black} size={24} />
        )
      }} 
      />
    </Drawer.Navigator>
      
  )      
}