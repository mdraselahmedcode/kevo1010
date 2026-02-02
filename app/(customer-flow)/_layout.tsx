// app/(customer-flow)/_layout.tsx
import { Stack } from 'expo-router';

export default function CustomerFlowLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackTitle: '', // hide the back title
      }}
    />
  );
}
