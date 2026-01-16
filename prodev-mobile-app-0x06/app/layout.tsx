import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="home" />
      <Stack.Screen name="search" />
      <Stack.Screen name="saved" />
      <Stack.Screen name="inbox" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}