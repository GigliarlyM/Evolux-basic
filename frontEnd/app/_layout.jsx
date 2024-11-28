import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{
        headerShown: false
        }} />

      <Stack.Screen name='main' options={{
        headerShown: true,
        headerTitle: "Viabilidade"
        }} />
    </Stack>
  )
}

export default Layout