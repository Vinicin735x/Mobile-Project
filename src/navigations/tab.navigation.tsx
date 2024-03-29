import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ScreenPerfil, ScreenCamera, ScreenLocation} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
type TabParamList = {
  Perfil: undefined
  Camera: undefined
};
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, "Perfil">
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.black} size={24} />
          ),

        }}
        />
        <Tab.Screen name="Camera" component={ScreenCamera}
          options={{
            tabBarIcon: () => (
              <AntDesign name='camera' color={colors.black} size={24} />
            )
          }}
          />
          <Tab.Screen name = "Location" component={ScreenLocation}
          options={{
            tabBarIcon: () => (
              <Entypo name="location" color= {colors.black} size={24}/>
            ),
          }}
          />

    </Tab.Navigator>
  );
}