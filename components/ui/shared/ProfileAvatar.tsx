import React from 'react';
import { View, Image, StyleProp, ViewStyle, TouchableOpacity, ColorValue } from 'react-native';
import GradientBox from '@/components/ui/GradientBox';

type ProfileAvatarProps = {
  imageUri: string;
  size?: number; // avatar size
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  gradientLocations?: readonly [number, number, ...number[]]; // optional
  padding?: number; // space between avatar and gradient border
  overlayComponent?: React.ReactNode; // instead of badge
  overlaySize?: number; // size of overlay component
  overlayPosition?: { bottom?: number; right?: number }; // position of overlay
  onPressAvatar?: () => void; // press handler for avatar image
  onPressOverlay?: () => void; // press handler for overlay
  style?: StyleProp<ViewStyle>;
};

export default function ProfileAvatar({
  imageUri,
  size = 90,
  padding = 4,
  gradientColors = ['#FAFF0A', '#FEAD4E', '#ED1B1BF7', '#FB1274', '#A61D5F', '#F109DA'] as const,
  gradientLocations,
  overlayComponent,
  overlaySize = 24,
  overlayPosition = { bottom: 4, right: 4 },
  onPressAvatar,
  onPressOverlay,
  style,
}: ProfileAvatarProps) {
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
      {/* Gradient border with pressable avatar */}
      <TouchableOpacity activeOpacity={0.8} onPress={onPressAvatar} style={{ flex: 1 }}>
        <GradientBox
          size={size}
          padding={padding}
          colors={gradientColors}
          locations={gradientLocations}>
          <Image
            source={{ uri: imageUri }}
            style={{ width: '100%', height: '100%', borderRadius: size / 2 }}
            resizeMode="cover"
          />
        </GradientBox>
      </TouchableOpacity>

      {/* Overlay component */}
      {overlayComponent && (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressOverlay}
          style={{
            position: 'absolute',
            width: overlaySize,
            height: overlaySize,
            bottom: overlayPosition.bottom ?? 0,
            right: overlayPosition.right ?? 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {overlayComponent}
        </TouchableOpacity>
      )}
    </View>
  );
}
