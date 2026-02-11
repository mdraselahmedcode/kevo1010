import React from 'react';
import { StatusBar, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import CustomHeader from '@/components/ui/CustomHeader';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import FormLayoutWithHeader from '@/components/ui/layouts/FormLayoutWithHeader';

import ChangePasswordFields from '@/components/formFields/ChangePasswordFields';
import { validateFields } from '@/utils/formValidate';
import Toast from 'react-native-toast-message';

const ChangePasswordScreen = () => {
  const router = useRouter();
  const { fields, setFields } = ChangePasswordFields();

  const getField = (name: string) => fields.find((f) => f.name === name);

  const updateField = (name: string, value: string | number | boolean) =>
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );

  const handleSaveChanges = () => {
    const isValid = validateFields(fields, setFields);
    if (!isValid) return;

    const newPassword = getField('newPassword')?.value;
    const confirmPassword = getField('confirmPassword')?.value;

    if (newPassword !== confirmPassword) {
      setFields((prev) =>
        prev.map((f) =>
          f.name === 'newPassword' || f.name === 'confirmPassword' ? { ...f, error: true } : f
        )
      );

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'New password and confirm password do not match.',
        position: 'top',
      });
      return;
    }

    const payload = {
      currentPassword: getField('currentPassword')?.value,
      newPassword,
    };

    console.log('Password change payload:', payload);

    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Your password has been updated successfully.',
      position: 'top',
      onPress: () => router.back(),
    });

    setTimeout(() => router.back(), 1500);
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeader
        title="Change Password"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <FormLayoutWithHeader contentStyle={{ gap: 24 }}>
        <View className="flex gap-6">
          {fields.map((field) => (
            <PasswordInput
              key={field.name}
              label={field.label}
              placeHolder={field.placeHolder}
              value={field.value as string}
              handler={(_, val) => updateField(field.name, val)}
              keyboard={field.keyboard}
              error={field.error}
            />
          ))}

          <PrimaryButton title="Save Changes" onPress={handleSaveChanges} />
        </View>
      </FormLayoutWithHeader>
    </>
  );
};

export default ChangePasswordScreen;
