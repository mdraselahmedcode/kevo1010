import React, { useEffect, useState } from 'react';
import { Button, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import FormLayout from '@/components/ui/layouts/FormLayout';
import HeaderPrimary from '@/components/ui/shared/HeaderPrimary';
import TextBodySecondary from '@/components/ui/shared/TextBodySecondary';
import PrimaryButton from '@/components/ui/PrimaryButton';
import OtpInput from '@/components/ui/inputs/OtpInput';

const VerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(15);
  const [canResend, setCanResend] = useState(false);

  const { email } = useLocalSearchParams<{ email?: string }>();

  useEffect(() => {
    console.log(email);
  }, [email]);
  // Timer effect
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    // 🔥 Call resend code API
    console.log('Resend code for:', email);
    setTimer(15);
    setCanResend(false);
  };

  const handleVerify = async () => {
    if (otp.length !== 4) return;

    setLoading(true);

    // 🔥 Call backend verify API here
    console.log('OTP:', otp);

    setLoading(false);
    router.push('/forgot-password/resetPassword');
  };

  return (
    <>
      <StatusBar translucent barStyle="dark-content" />

      <FormLayout>
        <View className="flex gap-12">
          {/* Header */}
          <View className="items-center">
            <HeaderPrimary
              text="Verification Code"
              style={{
                color: '#040404',
                letterSpacing: -0.35,
                fontWeight: 'semibold',
                marginBottom: 6,
                lineHeight: 28,
              }}
            />
            <TextBodySecondary
              style={{ textAlign: 'center', marginTop: 0 }}
              text="We have sent the verification code to your email address"
            />
            <TextBodySecondary
              style={{ fontWeight: 'bold', marginTop: 4 }}
              text={email ?? 'email not found'}
            />
          </View>

          {/* OTP Input */}
          <OtpInput
            length={4}
            onChange={(value) => setOtp(value)}
            onComplete={(value) => setOtp(value)}
          />

          {/* Resend Section */}
          <View className="flex items-center gap-0">
            <Text style={{ lineHeight: 30, textAlign: 'center' }}>
              <Text>You didn&apos;t get the code?{'\n'}</Text>

              <TouchableOpacity disabled={!canResend} onPress={handleResend}>
                <Text
                  style={{
                    color: '#3B82F6', // text-primary
                    opacity: canResend ? 1 : 0.5, // 50% opacity if not clickable
                    fontWeight: 'bold',
                  }}>
                  Resend
                </Text>
              </TouchableOpacity>

              <Text>
                {'\n'}in {canResend ? 0 : timer}s
              </Text>
            </Text>
          </View>

          {/* Submit */}
          <PrimaryButton
            title={loading ? 'Verifying...' : 'Confirm'}
            onPress={handleVerify}
            disabled={otp.length !== 4 || loading}
          />
        </View>
      </FormLayout>
    </>
  );
};

export default VerificationScreen;
