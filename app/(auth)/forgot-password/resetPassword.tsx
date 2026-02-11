import React, { useCallback, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { router } from 'expo-router';
import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import PrimaryButton from '@/components/ui/PrimaryButton';
import FormLayout from '@/components/ui/layouts/FormLayout';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import ResetPasswordFields from '@/components/formFields/ResetPasswordFields';
import SuccessModal from '@/components/ui/modals/SuccessModal';

const ResetPasswordScreen = () => {
  const { fields, setFields } = ResetPasswordFields();
  const [modalVisible, setModalVisible] = useState(false);

  const getField = (name: string) => fields.find((f) => f.name === name);
  const updateField = (name: string, value: string | number | boolean) =>
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );

  const handleReset = () => {
    const payload = fields.reduce((acc: Record<string, any>, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
    const password = payload.password;
    const confirmPassword = payload.confirmPassword;
    console.log('Payload:', payload);

    // Call API here...

    // Show modal instead of navigating
    setModalVisible(true);
    // router.replace('/forgot-password/successModal');
  };

  return (
    <>
      <StatusBar translucent barStyle="dark-content" />

      <FormLayout>
        <View className="flex gap-8">
          <View className="flex items-center justify-center  ">
            <HeaderPrimary
              text="Create New Password"
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
              text="Your new password must be different from previous used passwords."
            />
          </View>

          <PasswordInput
            label="New Password"
            placeHolder="******"
            name="password"
            value={(getField('password')?.value as string) || ''}
            handler={(_, value) => updateField('password', value)}
            error={!!getField('password')?.error}
            keyboard="default"
          />
          <PasswordInput
            label="New Confirm password"
            placeHolder="******"
            name="confirmPassword"
            value={(getField('confirmPassword')?.value as string) || ''}
            handler={(_, value) => updateField('confirmPassword', value)}
            error={!!getField('confirmPassword')?.error}
            keyboard="default"
          />

          {/* Submit */}
          <PrimaryButton title="Confirm" onPress={handleReset} />

          {/* Success Modal */}
          <SuccessModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            message="Your password has been reset successfully!"
            onButtonPress={() => router.replace('/login')}
          />
        </View>
      </FormLayout>
    </>
  );
};

export default ResetPasswordScreen;
