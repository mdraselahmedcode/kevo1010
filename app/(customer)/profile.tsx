import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import { HeaderWithParticles } from '@/components/ui/HeaderWithParticles';
import InputLabel from '@/components/ui/shared/InputLabel';
import ProfileTopSection from '@/components/ui/shared/ProfileTopSection';
import { ChevronRightIcon } from '@/components/icons/chevronRightIcon';
import ProfileItem from '@/components/ui/shared/ProfileItem';
import PrimaryButton from '@/components/ui/PrimaryButton';

const ProfileScreen = () => {
  const profileItems = [
    { title: 'Personal Information', navigateTo: 'PersonalInfo' },
    { title: 'Account & Security', navigateTo: 'AccountSecurity' },
    { title: 'Ratings & Reviews', navigateTo: 'RatingsReviews' },
    { title: 'Connected Account', navigateTo: 'ConnectedAccount' },
    { title: 'Support', navigateTo: 'Support' },
    { title: 'About us', navigateTo: 'AboutUs' },
    { title: 'Terms of use', navigateTo: 'TermsOfUse' },
    { title: 'Privacy policy', navigateTo: 'PrivacyPolicy' },
  ];

  return (
    <>
      {/* Status bar */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      {/* Header */}
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

      {/* Page background */}
      <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 0 }}>
          {/* Reusable top gradient section */}
          <ProfileTopSection
            userType="customer"
            imageUri="https://randomuser.me/api/portraits/women/44.jpg"
            name="Rasel Ahmed"
            email="mdraselahmed.code@gmail.com"
            showCamera={true}
          />

          <View className=" gap-9 px-5">
            {/* Profile Items */}
            <View className="mt-7 flex gap-4">
              <InputLabel
                text="Account Settings"
                style={{ textTransform: 'uppercase', marginBottom: 0 }}
              />

              {profileItems.map((item, idx) => (
                <ProfileItem
                  key={idx}
                  title={item.title}
                  onPress={() => {
                    console.log('Navigate to', item.navigateTo);
                    // router.push(item.navigateTo) or navigation.navigate(item.navigateTo)
                  }}
                />
              ))}
            </View>

            <PrimaryButton title="Log out" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
