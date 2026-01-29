import { Stack } from 'expo-router';

export default function ForgotPasswordLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} />
      <Stack.Screen name="resetPassword" options={{ headerShown: false }} />
      {/* <Stack.Screen
        name="successModal"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
}
