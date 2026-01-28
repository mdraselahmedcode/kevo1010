// // app/(auth)/signup.tsx

// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   Text,
// } from 'react-native';
// import Animated, {
//   useAnimatedKeyboard,
//   useAnimatedStyle,
//   interpolate,
//   Extrapolate,
// } from 'react-native-reanimated';

// import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
// import InputLabel from '@/components/ui/shared/InputLabel';
// import InputField from '@/components/ui/inputs/Input';
// import PasswordInput from '@/components/ui/inputs/PasswordInput';
// import PrimaryButton from '@/components/ui/PrimaryButton';
// import CustomerSignUpFields from '@/components/formFields/CustomerSignUpFields';
// import { useRouter } from 'expo-router';
// import SocialAuthDivider from '@/components/ui/auth/SocialAuthDivider';
// import InputCheckbox from '@/components/ui/inputs/InputCheckbox';

// export default function CustomerSignup() {
//   const router = useRouter();

//   const { fields, setFields } = CustomerSignUpFields();

//   const getField = (name: string) => fields.find((f) => f.name === name);

//   const updateField = (name: string, value: string | boolean) => {
//     setFields((prev) =>
//       prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
//     );
//   };

//   /* ---------------- Keyboard Animation ---------------- */
//   const keyboard = useAnimatedKeyboard();
//   const MAX_TRANSLATE = 120;

//   const animatedStyle = useAnimatedStyle(() => {
//     const translateY = interpolate(
//       keyboard.height.value,
//       [0, 300],
//       [0, -MAX_TRANSLATE],
//       Extrapolate.CLAMP
//     );
//     return { transform: [{ translateY }] };
//   });

//   /* ---------------- Submit ---------------- */
//   const handleCustomerSignupPress = () => {
//     // Create payload from all fields
//     const payload = fields.reduce((acc: Record<string, any>, field) => {
//       acc[field.name] = field.value;
//       return acc;
//     }, {});

//     console.log('Signup Payload:', payload);
//   };

//   return (
//     <Animated.View style={[{ flex: 1, backgroundColor: '#F9FAFB' }, animatedStyle]}>
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           flexGrow: 1,
//           justifyContent: 'center',
//           paddingHorizontal: 20,
//           paddingVertical: 60,
//         }}>
//         <HeaderPrimary text="Create Your Account" />

//         {/* Name */}
//         <View className="mb-4">
//           <InputField
//             label="Full Name"
//             placeHolder="Enter your name"
//             keyboard="default"
//             name="name"
//             value={(getField('name')?.value as string) || ''}
//             handler={(_, value) => updateField('name', value)}
//             error={!!getField('name')?.error}
//           />
//         </View>

//         {/* Email */}
//         <View className="mb-4">
//           <InputField
//             label="Email Address"
//             placeHolder="Enter email address"
//             keyboard="email-address"
//             name="email"
//             value={(getField('email')?.value as string) || ''}
//             handler={(_, value) => updateField('email', value)}
//             error={!!getField('email')?.error}
//           />
//         </View>

//         {/* Password */}
//         <View className="mb-4">
//           <PasswordInput
//             label="Password"
//             placeHolder="Password"
//             name="password"
//             value={(getField('password')?.value as string) || ''}
//             handler={(_, value) => updateField('password', value)}
//             error={!!getField('password')?.error}
//             keyboard="default"
//           />
//         </View>

//         {/* Confirm Password */}
//         <View className="mb-7">
//           <PasswordInput
//             label="Confirm Password"
//             placeHolder="Confirm password"
//             name="confirmPassword"
//             value={(getField('confirmPassword')?.value as string) || ''}
//             handler={(_, value) => updateField('confirmPassword', value)}
//             error={!!getField('confirmPassword')?.error}
//             keyboard="default"
//           />
//         </View>
//         {/* terms and condition */}
//         <View className="mb-7">
//           <InputCheckbox
//             label={
//               <Text>
//                 Agree with <Text style={{ color: '#2C80EC' }}>Terms & Conditions</Text>
//               </Text>
//             }
//             name="agree"
//             value={!!getField('agree')?.value}
//             error={!!getField('agree')?.error}
//             handler={(_, value) => updateField('agree', value)}
//           />
//         </View>

//         <PrimaryButton title="Sign Up" onPress={handleCustomerSignupPress} />

//         <View className="mt-7 items-center">
//           <TouchableOpacity onPress={() => router.push('/login')}>
//             <InputLabel text="Already have an account? Login" />
//           </TouchableOpacity>
//         </View>

//         {/* ---------------- Divider + Social ---------------- */}
//         <SocialAuthDivider
//           providers={[
//             {
//               id: 'google',
//               icon: require('@/assets/onboarding/google_icon.png'),
//               onPress: () => console.log('Google Login'),
//             },
//             {
//               id: 'apple',
//               icon: require('@/assets/onboarding/apple_icon.png'),
//               onPress: () => console.log('Apple Login'),
//             },
//           ]}
//         />
//       </ScrollView>
//     </Animated.View>
//   );
// }

import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import InputField from '@/components/ui/inputs/Input';
import PasswordInput from '@/components/ui/inputs/PasswordInput';
import PrimaryButton from '@/components/ui/PrimaryButton';
import CustomerSignUpFields from '@/components/formFields/CustomerSignUpFields';
import { useRouter } from 'expo-router';
import SocialAuthDivider from '@/components/ui/auth/SocialAuthDivider';
import InputCheckbox from '@/components/ui/inputs/InputCheckbox';

export default function CustomerSignup() {
  const router = useRouter();
  const { fields, setFields } = CustomerSignUpFields();
  const getField = (name: string) => fields.find((f) => f.name === name);
  const updateField = (name: string, value: string | boolean) =>
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value, error: false } : field))
    );

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

  const handleCustomerSignupPress = () => {
    const payload = fields.reduce((acc: Record<string, any>, field) => {
      acc[field.name] = field.value;
      return acc;
    }, {});
    console.log('Signup Payload:', payload);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingVertical: 60,
          }}>
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

          <PrimaryButton title="Sign Up" onPress={handleCustomerSignupPress} />

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
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
