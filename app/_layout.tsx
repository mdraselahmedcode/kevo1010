// import '../global.css';
// import { Stack } from 'expo-router';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { store, RootState } from '@/store';
// import { useEffect, useState } from 'react';
// import { setUser, setRole } from '@/store/authSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as SplashScreen from 'expo-splash-screen';

// function AppNavigator() {
//   const dispatch = useDispatch();
//   const [isReady, setIsReady] = useState(false); // track bootstrap readiness

//   useEffect(() => {
//     const bootstrap = async () => {
//       try {
//         // Keep the native splash visible until bootstrap is done
//         await SplashScreen.preventAutoHideAsync();

//         // Restore user session from AsyncStorage
//         const storedUser = await AsyncStorage.getItem('user');
//         const storedRole = await AsyncStorage.getItem('role');

//         if (storedUser) dispatch(setUser(JSON.parse(storedUser)));
//         if (storedRole) dispatch(setRole(storedRole as 'customer' | 'provider'));

//         // optional delay to avoid flicker
//         await new Promise((resolve) => setTimeout(resolve, 50));
//       } catch (err) {
//         console.log('Error restoring session:', err);
//       } finally {
//         setIsReady(true); // mark bootstrap done
//       }
//     };

//     bootstrap();
//   }, []);

//   // Hide splash once ready
//   useEffect(() => {
//     if (isReady) {
//       SplashScreen.hideAsync();
//     }
//   }, [isReady]);

//   // Render nothing until ready, splash stays visible
//   if (!isReady) {
//     return null;
//   }

//   return <Stack screenOptions={{ headerShown: false }} />;
// }

// export default function RootLayout() {
//   return (
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>
//   );
// }

// app/_layout.tsx
import '../global.css';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';
import { store, RootState } from '@/store';
import { useEffect } from 'react';
import { setAppLoading, setUser, setRole } from '@/store/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

function AppNavigator() {
  const dispatch = useDispatch();
  const isAppLoading = useSelector((state: RootState) => state.auth.isAppLoading);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        // Keep native splash visible
        await SplashScreen.preventAutoHideAsync();

        // Restore user session from AsyncStorage
        const storedUser = await AsyncStorage.getItem('user');
        const storedRole = await AsyncStorage.getItem('role');

        if (storedUser) dispatch(setUser(JSON.parse(storedUser)));
        if (storedRole) dispatch(setRole(storedRole as 'customer' | 'provider'));
      } catch (err) {
        console.log('Error restoring session:', err);
      } finally {
        // Loading finished
        dispatch(setAppLoading(false));
        await SplashScreen.hideAsync();
      }
    };

    bootstrap();
  }, []);

  if (isAppLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('@/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('@/assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('@/assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('@/assets/fonts/Nunito-Bold.ttf'),

    'Syne-Regular': require('@/assets/fonts/Syne-Regular.ttf'),
    'Syne-Medium': require('@/assets/fonts/Syne-Medium.ttf'),
    'Syne-SemiBold': require('@/assets/fonts/Syne-SemiBold.ttf'),
    'Syne-Bold': require('@/assets/fonts/Syne-Bold.ttf'),
    'Syne-ExtraBold': require('@/assets/fonts/Syne-ExtraBold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#2C80EC" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
