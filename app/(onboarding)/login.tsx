// app/(onboarding)/login.tsx
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '@/components/ui/PrimaryButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    console.log('Login pressed with', email, password);
  };

  const handleSignupPress = () => {
    console.log('Navigate to Signup page');
  };

  const handleForgotPasswordPress = () => {
    console.log('Navigate to Forgot Password page');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingVertical: 60,
          backgroundColor: '#F9FAFB', // bg-background
        }}>
        <View className="mb-5">
          <Text className="font-nunitoMedium text-[24px] leading-[33px] text-text-dark">
            Login with Email
          </Text>
        </View>

        {/* Email Input */}
        <View className="mb-4">
          <Text className="mb-1 font-nunito text-[16px] leading-[22px] tracking-[0.2px] text-text-dark">
            Email
          </Text>
          <TextInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            className="border-inputborder rounded-lg border bg-background px-4 py-[14px]"
          />
        </View>

        {/* Password Input */}
        <View className="mb-6">
          <Text className="mb-1 font-nunito text-[16px] leading-[22px] tracking-[0.2px] text-text-dark">
            Password
          </Text>
          <TextInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border-inputborder rounded-lg border bg-background px-4 py-[14px]"
          />
        </View>

        {/* Login Button */}
        <PrimaryButton title="Login" onPress={handleLoginPress} className="mb-4 w-full" />

        {/* Signup / Forgot Password Row */}
        <View className="flex-row justify-between">
          <TouchableOpacity onPress={handleSignupPress}>
            <Text className="font-nunito text-[16px] leading-[22px] tracking-[0.2px] text-text-lighter-dark ">
              Signup
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPasswordPress}>
            <Text className="font-nunito text-[16px] leading-[22px] tracking-[0.2px] text-text-lighter-dark ">
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <View className="my-6 w-full flex-row items-center">
          <View className="bg-inputborder h-[1px] flex-1" />

          <View className="mx-4 -mb-[30px] flex flex-row gap-5">
            {/* Google */}
            <View className="h-[57px] w-[57px] items-center justify-center rounded-full bg-gray-200">
              <Image
                source={require('@/assets/onboarding/google_icon.png')} // correct prop
                className="h-8 w-8" // icon size
                resizeMode="contain"
              />
            </View>

            {/* Apple */}
            <View className="h-[57px] w-[57px] items-center justify-center rounded-full bg-gray-200">
              <Image
                source={require('@/assets/onboarding/apple_icon.png')}
                className="h-8 w-8"
                resizeMode="contain"
              />
            </View>
          </View>

          <View className="bg-inputborder h-[1px] flex-1" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
