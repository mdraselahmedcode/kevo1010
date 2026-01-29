// app/(auth)/signup.tsx

import React, { useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Image, Text } from 'react-native';

import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import InputLabel from '@/components/ui/shared/InputLabel';
import InputField from '@/components/ui/inputs/Input';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import ServiceSignUpFields from '@/components/formFields/ServiceSignUpFields';
import { useRouter } from 'expo-router';
import SocialAuthDivider from '@/components/ui/auth/SocialAuthDivider';
import InputCheckbox from '@/components/ui/inputs/InputCheckbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLocation from '@/hooks/useLocation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormLayout from '@/components/ui/layouts/FormLayout';

export default function ServiceProviderSignup() {
  const router = useRouter();

  const { fields, setFields } = ServiceSignUpFields();
  const { location, loading: locationLoading } = useLocation();

  const getField = (name: string) => fields.find((f) => f.name === name);

  const updateField = (name: string, value: string | number | boolean) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );
  };

  /* ---------------- Submit ---------------- */
  const handleServiceProviderSignupPress = () => {
    if (!location) {
      alert('Location not available yet. Please wait.');
      return;
    }

    // Create payload from all fields
    const payload = fields.reduce((acc: Record<string, any>, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    console.log('Signup Payload:', payload);
  };

  // Auto-set latitude & longitude into fields when location updates
  useEffect(() => {
    if (location) {
      updateField('latitude', location.latitude);
      updateField('longitude', location.longitude);
    }
  }, [location]);

  return (
    <FormLayout>
      <HeaderPrimary text="Create Your Account" />

      {/* Name */}
      <View className="mb-4">
        <InputField
          label="Full Name"
          placeHolder="Enter your name"
          keyboard="default"
          name="name"
          value={(getField('name')?.value as string) || ''}
          handler={(_, value) => updateField('name', value)}
          error={!!getField('name')?.error}
        />
      </View>

      {/* Email */}
      <View className="mb-4">
        <InputField
          label="Email Address"
          placeHolder="Enter email address"
          keyboard="email-address"
          name="email"
          value={(getField('email')?.value as string) || ''}
          handler={(_, value) => updateField('email', value)}
          error={!!getField('email')?.error}
        />
      </View>

      {/* Password */}
      <View className="mb-4">
        <PasswordInput
          label="Password"
          placeHolder="Password"
          name="password"
          value={(getField('password')?.value as string) || ''}
          handler={(_, value) => updateField('password', value)}
          error={!!getField('password')?.error}
          keyboard="default"
        />
      </View>

      {/* Confirm Password */}
      <View className="mb-7">
        <PasswordInput
          label="Confirm Password"
          placeHolder="Confirm password"
          name="confirmPassword"
          value={(getField('confirmPassword')?.value as string) || ''}
          handler={(_, value) => updateField('confirmPassword', value)}
          error={!!getField('confirmPassword')?.error}
          keyboard="default"
        />
      </View>

      {/* ZIP Code */}
      <View className="mb-7">
        <InputField
          label="ZIP Code"
          placeHolder="Enter ZIP Code"
          name="zipCode"
          value={(getField('zipCode')?.value as string) || ''}
          handler={(_, value) => updateField('zipCode', value)}
          error={!!getField('zipCode')?.error}
          keyboard="number-pad"
        />
      </View>

      {/* terms and condition */}
      <View className="mb-7">
        <InputCheckbox
          label={
            <Text>
              Agree with <Text style={{ color: '#2C80EC' }}>Terms & Conditions</Text>
            </Text>
          }
          name="agree"
          value={!!getField('agree')?.value}
          error={!!getField('agree')?.error}
          handler={(_, value) => updateField('agree', value)}
        />
      </View>

      {/* <PrimaryButton title="Sign Up" onPress={handleServiceProviderSignupPress} /> */}

      <PrimaryButton
        title={
          locationLoading
            ? 'Fetching Location...' // meaningful during loading
            : !location
              ? 'Waiting for Location...' // optional fallback
              : 'Sign Up' // ready
        }
        onPress={handleServiceProviderSignupPress}
        disabled={locationLoading || !location}
      />

      <View className="mt-7 items-center">
        <TouchableOpacity onPress={() => router.push('/login')}>
          <InputLabel text="Already have an account? Login" />
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
    </FormLayout>
  );
}
