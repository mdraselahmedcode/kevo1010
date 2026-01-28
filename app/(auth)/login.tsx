import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';

import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import PrimaryButton from '@/components/ui/PrimaryButton';
import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import InputLabel from '@/components/ui/shared/InputLabel'; // import the label component
import InputField from '@/components/ui/inputs/Input';
import LoginFields from '@/components/formFields/LoginFields';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import SocialAuthDivider from '@/components/ui/auth/SocialAuthDivider';

export default function Login() {
  const router = useRouter();
  // login fields
  const { fields, setFields } = LoginFields(); // make sure LoginFields() returns an array of field objects

  const getField = (name: string) => fields.find((field) => field.name === name);

  const updateField = (name: string, value: string | boolean) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );
  };

  /* ---------------- Keyboard Animation ---------------- */
  const keyboard = useAnimatedKeyboard();
  const MAX_TRANSLATE = 120;

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      keyboard.height.value,
      [0, 300],
      [0, -MAX_TRANSLATE],
      Extrapolate.CLAMP
    );
    return { transform: [{ translateY }] };
  });

  /* ---------------- Handlers ---------------- */
  const handleLoginPress = () => {
    const email = getField('email')?.value;
    const password = getField('password')?.value;

    console.log('Login:', email, password);
  };

  return (
    <Animated.View style={[{ flex: 1, backgroundColor: '#F9FAFB' }, animatedStyle]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 60,
        }}>
        {/* ---------------- Title ---------------- */}
        <HeaderPrimary text="Login with Email" />

        {/* ---------------- Email ---------------- */}
        <View className="mb-4">
          <InputField
            label="Email Address"
            placeHolder="Enter Email Address"
            keyboard="email-address"
            name="email"
            value={(getField('email')?.value as string) || ''}
            handler={(_, value) => updateField('email', value)}
            error={!!getField('email')?.error}
          />
        </View>

        {/* ---------------- Password ---------------- */}
        <View className="mb-6">
          <PasswordInput
            label="Password"
            placeHolder="******"
            name="password"
            value={(getField('password')?.value as string) || ''}
            handler={(_, value) => updateField('password', value)}
            error={!!getField('password')?.error}
            keyboard="default"
          />
        </View>

        {/* ---------------- Login Button ---------------- */}
        <PrimaryButton title="Login" onPress={handleLoginPress} className="mb-4 w-full" />

        {/* ---------------- Links ---------------- */}
        <View className="mb-6 flex-row justify-between">
          <TouchableOpacity onPress={() => router.push('/signup/serviceProvider')}>
            <InputLabel text="Signup" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/forgotPassword')}>
            <InputLabel text="Forgot Password" />
          </TouchableOpacity>
        </View>

        {/* ---------------- Divider + Social ---------------- */}
        <SocialAuthDivider
          providers={[
            {
              id: 'google',
              icon: require('@/assets/onboarding/google_icon.png'),
              onPress: () => console.log('Google Login'),
            },
            {
              id: 'apple',
              icon: require('@/assets/onboarding/apple_icon.png'),
              onPress: () => console.log('Apple Login'),
            },
          ]}
        />
      </ScrollView>
    </Animated.View>
  );
}
