import React, { useEffect, useState } from 'react';
import { View, ScrollView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '@/store';
import CustomHeader from '@/components/ui/CustomHeader';
import PrimaryButton from '@/components/ui/PrimaryButton';
import InputField from '@/components/ui/inputs/Input';
import { setUser } from '@/store/authSlice';

import { customerProfileSampleData } from '@/app/(profile-common)/data/customerProfileSampleData';
import { providerProfileSampleData } from '@/app/(profile-common)/data/providerProfileSampleData';
import { getPersonalInfoFields } from '@/components/formFields/PersonalInfoFields';
import type { FieldsType } from '@/types/Types';
import { validateFields } from '@/utils/formValidate';
import Toast from 'react-native-toast-message';

const EditPersonalInfoPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { role } = useSelector((state: RootState) => state.auth);

  // Redirect if role not set
  useEffect(() => {
    if (!role) router.replace('/(auth)/role');
  }, [role]);

  if (!role) return null;

  const userProfile = role === 'provider' ? providerProfileSampleData : customerProfileSampleData;

  const initialFields = getPersonalInfoFields(role, userProfile);
  const [formFields, setFormFields] = useState<FieldsType[]>(initialFields);

  // Reset error when user types
  const handleChange = (name: string, value: string) => {
    setFormFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );
  };

  const handleSave = () => {
    const isValid = validateFields(formFields, setFormFields);
    if (!isValid) return;

    const updatedData: Record<string, string> = {};
    formFields.forEach((field) => {
      updatedData[field.name] = field.value as string;
    });

    console.log('Updated Info:', updatedData);

    // TODO: Call API to update profile
    // dispatch(setUser({ id: userProfile.id || '1', email: updatedData.email }));

    Toast.show({
      type: 'success',
      text1: 'Profile updated!',
      text2: 'Your personal information has been saved successfully.',
      position: 'top',
      visibilityTime: 2000,
    });

    router.back();
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeader
        title="Edit Personal Info"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView style={{ flex: 1 }} className="bg-background">
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // adjust for header
        >
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {formFields.map((field, idx) => (
              <InputField
                key={idx}
                value={field.value as string}
                handler={(_, value) => handleChange(field.name, value)}
                label={field.label || field.name}
                keyboard={field.keyboard || 'default'}
                error={field.error}
                showLabel={true}
                placeHolder={`Enter ${field.label || field.name}`}
              />
            ))}

            <PrimaryButton title="Save" onPress={handleSave} className="mt-4" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default EditPersonalInfoPage;
