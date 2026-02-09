import React from 'react';
import { View, ViewStyle, StyleProp, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type GradientBoxProps = {
  size: number;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  locations?: readonly [number, number, ...number[]]; // ✅ tuple with at least 2 numbers
  borderRadius?: number;
  padding?: number; // thickness of the gradient border
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function GradientBox({
  size,
  colors,
  locations,
  borderRadius,
  padding = 3,
  children,
  style,
}: GradientBoxProps) {
  const radius = borderRadius ?? size / 2;

  return (
    <LinearGradient
      colors={colors}
      locations={locations}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        {
          width: size,
          height: size,
          borderRadius: radius,
          padding,
        },
        style,
      ]}>
      <View
        style={{
          flex: 1,
          borderRadius: radius - padding,
          overflow: 'hidden',
          backgroundColor: '#fff',
        }}>
        {children}
      </View>
    </LinearGradient>
  );
}
