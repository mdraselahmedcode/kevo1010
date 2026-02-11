// app/(profile-common)/personal-info.tsx
import React, { useEffect } from 'react';
import { View, ScrollView, StatusBar, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import CustomHeader from '@/components/ui/CustomHeader';
import PrimaryButton from '@/components/ui/PrimaryButton';
import InputLabel from '@/components/ui/shared/InputLabel';

import { customerProfileSampleData } from '@/app/(profile-common)/data/customerProfileSampleData';
import { providerProfileSampleData } from '@/app/(profile-common)/data/providerProfileSampleData';

import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import TextBodySmall from '@/components/ui/shared/TextBodySmall';

const PersonalInfoPage = () => {
  const router = useRouter();

  const { role } = useSelector((state: RootState) => state.auth);

  // Safe redirect if role not set
  useEffect(() => {
    if (!role) {
      router.replace('/(auth)/role');
    }
  }, [role]);

  if (!role) return null;

  // Select user profile based on role
  const userProfile = role === 'provider' ? providerProfileSampleData : customerProfileSampleData;

  // Map of label → value
  const personalInfoItems = [
    { label: 'Full Name', value: userProfile.name },
    { label: 'Email', value: userProfile.email },
    { label: 'Phone', value: userProfile.phone },
    { label: 'Address', value: userProfile.address },
  ];

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      {/* Header */}
      <CustomHeader
        title="Personal Information"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView className="flex-1 bg-background">
        <ScrollView contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}>
          {personalInfoItems.map((item, idx) => (
            <View
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#CACACB99',
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}>
              <TextBodySmall
                text={item.label}
                style={{ textAlign: 'left', fontFamily: 'Nunito-Medium', color: '#0F243E' }}
              />
              <TextBodySecondary
                text={item.value}
                className="text-start"
                style={{ textAlign: 'left' }}
              />
            </View>
          ))}

          {/* Edit Button */}
          <PrimaryButton
            title="Edit"
            onPress={() => {
              console.log('Edit pressed');
              router.push('/(profile-common)/personal-info/edit');
              // TODO: Navigate to edit page if needed
            }}
            className="mt-4"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PersonalInfoPage;
