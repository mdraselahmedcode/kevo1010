import React from 'react';
import { View } from 'react-native';
import { CheckInCircleIcon } from '@/components/icons/CheckInCircleIcon';

type CheckInCircleWithBgProps = {
  size?: number;
  iconSize?: number;
};

const CheckInCircleWithBg: React.FC<CheckInCircleWithBgProps> = ({ size = 36, iconSize = 24 }) => {
  return (
    <View
      className="relative items-center justify-center bg-white"
      style={{ height: size, width: size }}>
      <View className="absolute rounded-full bg-sky-50" style={{ inset: size * 0.06 }} />
      <View
        className="absolute items-center justify-center rounded-full bg-primary"
        style={{ inset: size * 0.12 }}>
        {/* <Feather name="check" size={iconSize} color="white" /> */}
        <CheckInCircleIcon color="#2C80EC" />
      </View>
    </View>
  );
};

export default CheckInCircleWithBg;
