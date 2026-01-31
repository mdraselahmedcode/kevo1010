import { View } from 'react-native';
import { router } from 'expo-router';
import PrimaryButton from '@/components/ui/PrimaryButton';
import ResponsiveText from '@/components/ui/ResponsiveText';
import HeroImage from '@/components/ui/HeroImage';

export default function Landing() {
  return (
    <View className="flex-1 justify-between bg-background px-container py-screen">
      {/* Hero */}
      <View className="flex-1 items-center justify-start">
        <HeroImage src={require('@/assets/onboarding/landing-hero.png')} />
        <ResponsiveText
          smClassName="mt-4 text-[20px] leading-[27px] font-nunitoMedium text-[#52525B] text-center"
          lgClassName="mt-5 text-[24px] leading-[32px] font-nunitoMedium text-[#52525B] text-center">
          Michigan&apos;s Premier Snow & Landscape Marketplace
        </ResponsiveText>
      </View>

      {/* Middle Text */}
      <View className="mb-12 items-center">
        <ResponsiveText
          smClassName="text-heading-sm font-nunitoMedium text-text-dark mb-2 text-center"
          lgClassName="text-heading-lg font-nunitoMedium text-text-dark mb-2 text-center">
          Get Started with Verification
        </ResponsiveText>
        <ResponsiveText
          smClassName="text-sub-sm font-nunito text-text-light text-center tracking-[0.2px]"
          lgClassName="text-sub-lg font-nunito text-text-light text-center tracking-[0.2px]">
          Serving Michigan communities with trusted, verified service providers
        </ResponsiveText>
      </View>

      {/* Button */}
      <PrimaryButton
        title="Get Started"
        onPress={() => router.push('/(auth)/login')}
        className="w-full max-w-[400px] self-center"
      />
    </View>
  );
}
