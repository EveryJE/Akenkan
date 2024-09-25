import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useColorScheme } from 'react-native';

const _layout = () => {
  const tabColor = useColorScheme() === "light" ? "#f59e0b" : "#1f2937";


  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="otp" />
    </Stack>
  );
}

export default _layout