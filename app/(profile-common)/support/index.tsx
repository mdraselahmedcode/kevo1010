import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';

import CustomHeader from '@/components/ui/CustomHeader';
import InputField from '@/components/ui/inputs/Input';
import MultilineInputField from '@/components/ui/inputs/MultilineInputField';
import PrimaryButton from '@/components/ui/PrimaryButton';

import SupportFields from '@/components/formFields/SupportFields';
import { validateFields } from '@/utils/formValidate';
import FormLayoutWithHeader from '@/components/ui/layouts/FormLayoutWithHeader';

const SupportScreen = () => {
  const insets = useSafeAreaInsets(); // get safe area insets

  const { fields, setFields } = SupportFields();
  const { width } = Dimensions.get('window');

  const getField = (name: string) => fields.find((f) => f.name === name);
  const updateField = (name: string, value: string | number | boolean) => {
    setFields((prev) => prev.map((f) => (f.name === name ? { ...f, value, error: false } : f)));
  };

  const handleSendMessage = () => {
    const isValid = validateFields(fields, setFields);
    if (!isValid) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all required fields.',
        position: 'top',
      });
      return;
    }

    const payload = fields.reduce((acc: Record<string, any>, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});

    console.log('Support form payload:', payload);

    Toast.show({
      type: 'success',
      text1: 'Message Sent!',
      text2: 'Your support message has been sent successfully.',
      position: 'top',
      visibilityTime: 2000,
    });

    // Optional: clear fields after submission
    setFields((prev) => prev.map((f) => ({ ...f, value: '', error: false })));
  };

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Stack.Screen options={{ headerShown: false }} />

      <CustomHeader
        title="Support"
        backButton
        height={100}
        paddingTop={20}
        backgroundColor="#FFFFFF"
      />

      <FormLayoutWithHeader>
        <View className="items-center">
          <Image
            source={require('@/assets/support.png')}
            style={{
              width: width * 0.5, // 50% of screen width
              height: width * 0.55, // keep aspect ratio
              borderRadius: 32,
              alignSelf: 'center',
            }}
          />
        </View>

        {fields.map((field) =>
          field.type === 'textarea' ? (
            <MultilineInputField
              key={field.name} // ✅ must be stable & unique
              value={field.value as string}
              onChangeText={(val) => updateField(field.name, val)}
              placeholder={field.placeHolder}
              minHeight={100}
              showLabel
              label={field.label}
              error={field.error}
              inputStyle={{ backgroundColor: 'white', paddingHorizontal: 16 }}
            />
          ) : (
            <InputField
              key={field.name}
              value={field.value as string}
              handler={(_, val) => updateField(field.name, val)}
              label={field.label}
              placeHolder={field.placeHolder}
              keyboard={field.keyboard}
              error={field.error}
              showLabel
              inputStyle={{ backgroundColor: 'white' }}
            />
          )
        )}

        <PrimaryButton title="Send Message" onPress={handleSendMessage} />
      </FormLayoutWithHeader>
    </>
  );
};

export default SupportScreen;
