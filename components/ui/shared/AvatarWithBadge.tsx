import React from 'react';
import { View, Image, ViewStyle, StyleProp } from 'react-native';
import GradientBox from '@/components/ui/GradientBox';
import { VerifiedIcon } from '@/components/icons';

type AvatarWithBadgeProps = {
  imageUri: string;
  size?: number;
  gradientColors?: readonly [string, string, ...string[]];
  gradientLocations?: readonly [number, number, ...number[]]; // ✅ tuple for TS
  padding?: number;
  showVerified?: boolean;
  badgeSize?: number;
  badgeTranslateX?: number;
  badgeTranslateY?: number;
  style?: StyleProp<ViewStyle>;
  checkBgColor?: string;
  curlyBottom?: number;
  curlyRight?: number;
  badgeNeeded?: boolean;
};

export default function AvatarWithBadge({
  imageUri,
  size = 90,
  padding = 4,
  gradientColors = ['#FAFF0A', '#FEAD4E', '#ED1B1BF7', '#FB1274', '#A61D5F', '#F109DA'] as const,
  gradientLocations,
  showVerified = false,
  badgeSize = 20,
  badgeTranslateX = 1,
  badgeTranslateY = 1,
  curlyBottom = 4,
  curlyRight = 4,
  checkBgColor = 'white',
  badgeNeeded = true,
  style,
}: AvatarWithBadgeProps) {
  return (
    <View
      style={[
        {
          position: 'relative',
          width: size,
          height: size,
          alignSelf: 'center',
        },
        style,
      ]}>
      {/* Gradient border */}
      <GradientBox
        size={size}
        padding={padding}
        colors={gradientColors}
        locations={gradientLocations} // ✅ TypeScript-safe
      >
        <Image
          source={{ uri: imageUri }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </GradientBox>

      {/* Verified badge */}
      {showVerified && badgeNeeded && (
        <View
          style={{
            position: 'absolute',
            bottom: curlyBottom,
            right: curlyRight,
            width: badgeSize,
            height: badgeSize,
            backgroundColor: checkBgColor,
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 2,
            shadowOffset: { width: 0, height: 1 },
          }}>
          <View
            style={{
              transform: [{ translateX: badgeTranslateX }, { translateY: badgeTranslateY }],
            }}>
            <VerifiedIcon size={badgeSize + 2} color="#00AFF5" checkColor="white" />
          </View>
        </View>
      )}
    </View>
  );
}
