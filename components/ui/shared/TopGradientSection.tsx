import React from 'react';
import { View, StyleSheet, Dimensions, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ParticlesOverlay } from '@/components/ParticlesOverlay';

type GradientColors = readonly [ColorValue, ColorValue, ...ColorValue[]];
type GradientLocations = readonly [number, number, ...number[]];

type TopGradientSectionProps = {
  height?: number;
  borderRadius?: number;
  backgroundColors?: GradientColors; // must be 2+ colors
  colorLocations?: GradientLocations; // optional, must match colors length
  children?: React.ReactNode;
};

const { width } = Dimensions.get('window');

export const TopGradientSection: React.FC<TopGradientSectionProps> = ({
  height = 120,
  borderRadius = 40,
  backgroundColors = ['#0073FF', '#58a2fc'],
  colorLocations,
  children,
}) => {
  return (
    <View
      style={{
        width,
        height,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        overflow: 'hidden',
      }}>
      {/* Gradient background */}
      <LinearGradient
        colors={backgroundColors}
        locations={colorLocations ?? undefined} // TS safe
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Particle overlay */}
      <ParticlesOverlay height={height} />

      {/* Optional children */}
      {children && <View style={{ flex: 1 }}>{children}</View>}
    </View>
  );
};
