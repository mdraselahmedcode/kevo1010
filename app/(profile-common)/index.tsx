import React, { useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '@/store';
import { logout } from '@/store/authSlice';
import { HeaderWithParticles } from '@/components/ui/HeaderWithParticles';
import InputLabel from '@/components/ui/shared/InputLabel';
import ProfileTopSection from '@/components/ui/shared/ProfileTopSection';
import ProfileItem from '@/components/ui/shared/ProfileItem';
import PrimaryButton from '@/components/ui/PrimaryButton';

import { customerProfileMenu } from './data/customerProfileMenu';
import { providerProfileMenu } from './data/providerProfileMenu';
import { customerProfileSampleData } from './data/customerProfileSampleData';
import { providerProfileSampleData } from './data/providerProfileSampleData';

const ProfileScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Redux state
  const { role } = useSelector((state: RootState) => state.auth);

  const isProvider = role === 'provider';

  const userProfile = role === 'provider' ? providerProfileSampleData : customerProfileSampleData;
  const profileMenu = role === 'provider' ? providerProfileMenu : customerProfileMenu;

  // 🔹 Safe redirect if role is null
  useEffect(() => {
    if (!role) {
      router.replace('/(auth)/role');
    }
  }, [role]);

  // 🔹 Logout handler
  const handleLogout = () => {
    router.replace('/(auth)/login');
    dispatch(logout());
  };

  return (
    <>
      <StatusBar translucent barStyle="light-content" />

      <Stack.Screen
        options={{
          headerShown: true,
          headerShadowVisible: false,
          header: () => (
            <HeaderWithParticles
              title="Profile"
              subtitle=""
              showBackButton
              backgroundColors={['#0073FF', '#0073FF']}
            />
          ),
        }}
      />

      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}>
          {/* Top section */}
          <ProfileTopSection
            userType={userProfile.userType}
            imageUri={userProfile.avatar}
            name={userProfile.name}
            email={userProfile.email}
            showCamera
          />

          <View className="gap-9 px-5">
            {/* Account Settings */}
            <View className="mt-7 gap-4">
              <InputLabel text="Account Settings" style={{ textTransform: 'uppercase' }} />
              {profileMenu.map((item) => (
                <ProfileItem
                  key={item.route}
                  title={item.title}
                  onPress={() => router.push(item.route as any)}
                />
              ))}
            </View>

            {/* Provider Tools */}
            {/* {isProvider && (
              <View className="mt-4 gap-4">
                <InputLabel text="Provider Tools" style={{ textTransform: 'uppercase' }} />
                <ProfileItem
                  title="My Services"
                  onPress={() => router.push('/(provider)/services' as any)}
                />
                <ProfileItem
                  title="Availability"
                  onPress={() => router.push('/(provider)/availability' as any)}
                />
                <ProfileItem
                  title="Earnings"
                  onPress={() => router.push('/(provider)/earnings' as any)}
                />
              </View>
            )} */}

            {/* Logout */}
            <PrimaryButton title="Log out" onPress={handleLogout} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
