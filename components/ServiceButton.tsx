

import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextBodySecondary from './ui/shared/TextBodySecondary';

type Props = {
  title: string;
  Icon: React.FC<{ size?: number; color?: string }>;
  selected: boolean;
  onPress: () => void;
  width: number;
};

export const ServiceButton: React.FC<Props> = ({ title, Icon, selected, onPress, width }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="m-2 items-center rounded-[12px] border border-2 border-blue-500 border-primary shadow-xl shadow-blue-200/30"
      style={[styles.button, { width }]}>
      {/* Main button background gradient */}
      <LinearGradient
        colors={['#c2dbfc', '#EFF6FF']} // Solid color (both stops same)
        start={{ x: 0.5, y: 1 }} // 0deg means from bottom to top
        end={{ x: 0.5, y: 0 }}
        style={[
          styles.gradientBackground,
          { backgroundColor: '#FFFFFF' }, // Fallback background
        ]}
      />

      {/* Icon with gradient background */}
      <View className="mb-2">
        <LinearGradient
          colors={['#FFFFFF', '#D0DFFF']}
          start={{ x: 0.5, y: 0 }} // Top
          end={{ x: 0.5, y: 1 }} // Bottom
          style={styles.iconContainer}>
          {/* Inner shadow for the icon container */}
          <View style={styles.innerShadow} />

          <Icon size={24} />
        </LinearGradient>
      </View>

      <TextBodySecondary text={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 8,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    overflow: 'hidden', // Important for gradient border radius
    position: 'relative',
    borderWidth: 1.3,
    borderColor: '#2C80EC', // Default border color
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 11, // Slightly less than container for border
  },
  iconContainer: {
    padding: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2C80EC',
    position: 'relative',
    overflow: 'hidden',
  },
  innerShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Nunito',
    color: '#374151',
    textAlign: 'center',
    marginTop: 4,
  },
});
