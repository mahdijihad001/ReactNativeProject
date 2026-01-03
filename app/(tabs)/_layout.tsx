import { Colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {



  return (
    <Tabs screenOptions={{
      headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: Colors.custom.primary, tabBarInactiveTintColor: Colors.custom.grey, tabBarStyle: {
        backgroundColor: "black",
        borderTopWidth: 0,
        position: "absolute",
        elevation: 0,
        height: 40,
        paddingBottom: 8
      }
    }}>
      <Tabs.Screen

        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
        }} name='index' />

      <Tabs.Screen options={{
        tabBarIcon: ({ size, color }) => <Ionicons name="bookmark" size={size} color={color} />
      }} name='bookmark' />

      <Tabs.Screen

        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="add-circle" size={size} color={Colors.custom.primary} />
        }}

        name='create' />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="notifications" size={size} color={color} />
        }}
        name='notification' />

      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => <Ionicons name="person-circle" size={size} color={color} />
        }}
        name='profile' />

    </Tabs>
  )

}
