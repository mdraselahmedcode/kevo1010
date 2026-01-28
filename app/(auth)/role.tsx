// app/(onboarding)/role.tsx
import { View, Image, Text, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import ResponsiveText from '@/components/ui/ResponsiveText';
import HeroImage from '@/components/ui/HeroImage';

export default function Role() {
  const { width } = Dimensions.get('window');
  const isTablet = width > 768;

  // Card dimensions relative to screen width
  const CARD_IMAGE_WIDTH = Math.min(width * 0.25, 105); // max 105px
  const CARD_HEIGHT = CARD_IMAGE_WIDTH * (100 / 105); // maintain original aspect ratio

  // Font scaling
  const titleFontSize = isTablet ? 22 : 18;
  const subtitleFontSize = isTablet ? 14 : 12;
  const titleLineHeight = isTablet ? 30 : 25;
  const subtitleLineHeight = isTablet ? 20 : 16;

  // Vertical spacing between cards
  const cardGap = isTablet ? 24 : 20;

  // Card press handlers
  const handleNeedServicePress = () => {
    router.push('/(auth)/login');
  };
  const handleProviderPress = () => {
    router.push('/(auth)/login');
  };

  return (
    <View
      className="flex-1 justify-start bg-background px-container"
      style={{ paddingTop: isTablet ? 100 : 60, paddingBottom: isTablet ? 100 : 60 }}>
      {/* Hero Section */}
      <View className="mb-[64px] flex items-center justify-start">
        <HeroImage src={require('@/assets/onboarding/landing-hero.png')} />
        <ResponsiveText
          smClassName="mt-4 text-[20px] leading-[27px] font-nunitoMedium text-[#52525B] text-center"
          lgClassName="mt-5 text-[24px] leading-[32px] font-nunitoMedium text-[#52525B] text-center">
          Michigan&apos;s Premier Snow & Landscape Marketplace
        </ResponsiveText>
      </View>

      {/* Cards Section */}
      <View className="flex flex-col" style={{ rowGap: cardGap }}>
        {/* Card 1 */}
        <TouchableOpacity
          onPress={handleNeedServicePress}
          activeOpacity={0.7} // fade on press
          className="flex-row items-center rounded-xl bg-primary px-[8px] py-[10px] shadow-sm">
          <Image
            source={require('@/assets/onboarding/need_service.png')}
            style={{ width: CARD_IMAGE_WIDTH, height: CARD_HEIGHT, borderRadius: 8 }}
            resizeMode="cover"
          />
          <View className="ml-3 flex-1">
            <Text
              style={{
                fontSize: titleFontSize,
                lineHeight: titleLineHeight,
              }}
              className="font-nunitoMedium text-start tracking-[0.2px] text-text-white">
              I Need Service
            </Text>
            <Text
              style={{
                fontSize: subtitleFontSize,
                lineHeight: subtitleLineHeight,
              }}
              className="mt-1 text-start font-nunito tracking-[0.2px] text-text-white">
              Find Snow removal & Landscaping Providers
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity
          onPress={handleProviderPress}
          activeOpacity={0.7} // fade on press
          className="flex-row items-center rounded-xl bg-primary px-[8px] py-[10px] shadow-sm">
          <Image
            source={require('@/assets/onboarding/service_provider.png')}
            style={{ width: CARD_IMAGE_WIDTH, height: CARD_HEIGHT, borderRadius: 8 }}
            resizeMode="cover"
          />
          <View className="ml-3 flex-1">
            <Text
              style={{
                fontSize: titleFontSize,
                lineHeight: titleLineHeight,
              }}
              className="font-nunitoMedium text-start tracking-[0.2px] text-text-white">
              I‘m a Provider
            </Text>
            <Text
              style={{
                fontSize: subtitleFontSize,
                lineHeight: subtitleLineHeight,
              }}
              className="mt-1 text-start font-nunito tracking-[0.2px] text-text-white">
              Grow your snow removal & landscaping business
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
