// app/(profile-common)/privacy-policy.tsx
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Stack } from 'expo-router';

import CustomHeader from '@/components/ui/CustomHeader';
import FormLayoutWithHeader from '@/components/ui/layouts/FormLayoutWithHeader';
import PolicySection from '@/components/ui/content/PolicySection';

import { privacyPolicyContent } from './data/privacyPolicyContent';

const PrivacyPolicyScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeader
        title="Privacy Policy"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <FormLayoutWithHeader contentStyle={{ gap: 24 }}>
        <View className="gap-6">
          {privacyPolicyContent.map((item, index) => (
            <PolicySection
              key={item.title}
              index={index + 1}
              title={item.title}
              description={item.description}
            />
          ))}
        </View>
      </FormLayoutWithHeader>
    </>
  );
};

export default PrivacyPolicyScreen;
