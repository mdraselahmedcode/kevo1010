// components/ui/layouts/FormLayoutWithHeader.tsx
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  children: React.ReactNode;
  contentStyle?: object;
};

export default function FormLayoutWithHeader({ children, contentStyle }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-background">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingBottom: 30 + insets.bottom,
            gap: 20,
            ...contentStyle,
          }}
          keyboardShouldPersistTaps="handled">
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
