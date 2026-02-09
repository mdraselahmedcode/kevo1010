import React from 'react';
import { View } from 'react-native';
import { CheckInCircleIcon } from '@/components/icons/CheckInCircleIcon';
import GradientBox from '@/components/ui/GradientBox';

type CheckInCircleWithBgProps = {
  size?: number;
  iconSize?: number;
};

const CheckInCircleWithBg: React.FC<CheckInCircleWithBgProps> = ({ size = 36, iconSize = 24 }) => {
  return (
    <GradientBox size={size} colors={['#FFFFFF', '#D0DFFF']} borderColor="#2C80EC">
      {/* inner ring */}
      <View
        style={{
          position: 'absolute',
          inset: size * 0.06,
          borderRadius: size,
          backgroundColor: 'transparent',
        }}
      />

      {/* icon container */}
      <View
        style={{
          position: 'absolute',
          inset: size * 0.12,
          borderRadius: size,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CheckInCircleIcon size={iconSize} color="#2C80EC" />
      </View>
    </GradientBox>
  );
};

export default CheckInCircleWithBg;
