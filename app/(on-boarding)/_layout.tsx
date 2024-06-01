import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (

    <Stack>
      <Stack.Screen
        name="on-boarding"
        options={{
          headerShown: false,
        }}
      />
    </Stack>

  );
};

export default AuthLayout;
