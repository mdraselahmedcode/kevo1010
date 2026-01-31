import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SuccessModal from '@/components/ui/modals/SuccessModal';

import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import InputField from '@/components/ui/inputs/Input';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import CustomerSignUpFields from '@/components/formFields/CustomerSignUpFields';
import { useRouter } from 'expo-router';
import SocialAuthDivider from '@/components/ui/auth/SocialAuthDivider';
import InputCheckbox from '@/components/ui/inputs/InputCheckbox';
import useLocation from '@/hooks/useLocation';
import FormLayout from '@/components/ui/layouts/FormLayout';
import { setRole } from '@/store/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { validateFields } from '@/utils/formValidate';
import { setUser } from '@/store/authSlice';

export default function CustomerSignup() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { fields, setFields } = CustomerSignUpFields();
  const { location, loading: locationLoading } = useLocation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const getField = (name: string) => fields.find((f) => f.name === name);
  const updateField = (name: string, value: string | number | boolean) =>
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );

  // useEffect(() => {
  //   dispatch(setRole('customer'));
  // }, []);

  // When user presses "Sign Up"
  const handleCustomerSignupPress = () => {
    if (!location) {
      alert('Location not available yet. Please wait.');
      return;
    }

    const isValid = validateFields(fields, setFields);
    if (!isValid) return;

    const payload = fields.reduce((acc: Record<string, any>, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    console.log('Signup Payload:', payload);

    // 🔥 API call here
    // await signup(payload);

    // ✅ On success
    setShowSuccessModal(true);
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

      {/* Terms */}
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

      <PrimaryButton
        title={
          locationLoading
            ? 'Fetching Location...' // meaningful during loading
            : !location
              ? 'Waiting for Location...' // optional fallback
              : 'Sign Up' // ready
        }
        onPress={handleCustomerSignupPress}
        disabled={locationLoading || !location}
      />

      <View className="mt-7 items-center">
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>

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

      <SuccessModal
        visible={showSuccessModal}
        message="Signup Successful!"
        buttonText="Done"
        onClose={() => setShowSuccessModal(false)}
        onButtonPress={() => {
          setShowSuccessModal(false);
          // router.replace('/login');
          router.replace('/(customer)/home');
        }}
      />
    </FormLayout>
  );
}
