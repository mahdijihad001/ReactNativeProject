import { Stack } from 'expo-router';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{
        flex: 1
      }}>
        <Stack>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          {/* <Stack.Screen name='profile' options={{ title: "Profile" }} />
          <Stack.Screen name='notification' options={{ headerShown: false }} /> */}
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
