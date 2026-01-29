import React from 'react';
import { View } from 'react-native';
import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import InputField from '@/components/ui/inputs/Input';
import PrimaryButton from '@/components/ui/PrimaryButton';
import ForgotPasswordFields from '@/components/formFields/ForgotPasswordFields';
import FormLayout from '@/components/ui/layouts/FormLayout';
import { useRouter } from 'expo-router';

const ForgotPasswordScreen = () => {
  const router = useRouter();

  const { fields, setFields } = ForgotPasswordFields();

  const getField = (name: string) => fields.find((f) => f.name === name);
  const updateField = (name: string, value: string) =>
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value, error: false } : f)));

  const handleSendCode = () => {
    const payload = fields.reduce((acc: Record<string, any>, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
    // console.log('Payload:', payload);

    const email = payload.email;

    // Navigate to verification page, passing email as route param
    router.push({
      pathname: '/forgot-password/verification',
      params: { email },
    });

    // later: await API call sucess
    // router.push('/forgot-password/verification');
  };

  return (
    <FormLayout>
      <View className="flex gap-12">
        <View className=" flex items-center">
          <HeaderPrimary
            text="Forgot Password"
            style={{
              textAlign: 'center',
              marginBottom: 6,
              color: '#040404',
              letterSpacing: -0.35,
              fontWeight: 'semibold',
              lineHeight: 28,
            }}
          />
          <TextBodySecondary
            style={{ maxWidth: '90%' }}
            text="Enter your email address below and we'll send you a verification code"
          />
        </View>

        <View className="">
          <InputField
            label="Email Address"
            placeHolder="Enter your email"
            keyboard="email-address"
            name="email"
            value={(getField('email')?.value as string) || ''}
            handler={(_, value) => updateField('email', value)}
            error={!!getField('email')?.error}
          />
        </View>

        <PrimaryButton title="Get code" onPress={handleSendCode} />
      </View>
    </FormLayout>
  );
};

export default ForgotPasswordScreen;
