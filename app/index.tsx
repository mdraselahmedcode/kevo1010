// import { Stack, Link } from 'expo-router';

// import { View } from 'react-native';

// import { Button } from '@/components/Button';
// import { Container } from '@/components/Container';
// import { ScreenContent } from '@/components/ScreenContent';

// export default function Home() {
//   return (
//     <View className={styles.container}>
//       <Stack.Screen options={{ title: 'Home' }} />
//       <Container>
//         <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
//         <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
//           <Button title="Show Details" />
//         </Link>
//       </Container>
//     </View>
//   );
// }

// const styles = {
//   container: 'flex flex-1 bg-white',
// };

import React from 'react';
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet, TextInput, View, useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  const keyboard = useAnimatedKeyboard();

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyles,
        { backgroundColor: colorScheme === 'light' ? '#fff' : '#000' },
      ]}>
      <View style={styles.box}>
        <TextInput placeholder="Text Input" />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#782aeb',
    borderRadius: 2,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    backgroundColor: '#b58df1',
    borderRadius: 5,
    margin: 20,
  },
});
