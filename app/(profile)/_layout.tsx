import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="profile-account"
        options={{
          headerShown: false,
        }}
      />
     <Stack.Screen
        name="notification"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="services"
        options={{
          headerShown: false,
        }}
      />
    </Stack>

  )
}

export default ProfileLayout