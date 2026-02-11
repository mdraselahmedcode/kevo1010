// app/(profile-common)/about-us.tsx
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Stack } from 'expo-router';

import CustomHeader from '@/components/ui/CustomHeader';
import FormLayoutWithHeader from '@/components/ui/layouts/FormLayoutWithHeader';
import PolicySection from '@/components/ui/content/PolicySection';

import { aboutUsContent } from './data/aboutUsContent';

const AboutUsScreen = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeader
        title="About Us"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <FormLayoutWithHeader contentStyle={{ gap: 24 }}>
        <View className="gap-6">
          {aboutUsContent.map((item, index) => (
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

export default AboutUsScreen;
