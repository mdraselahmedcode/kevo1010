import React from 'react';
import { View } from 'react-native';
import { PenIcon } from '@/components/icons/PenIcon';
import { HomeIcon } from '@/components/icons';

type HomeIconWithBgProps = {
  size?: number;
  iconSize?: number;
  iconColor?: string;
  bgColor?: string;
  // New props for fine-tuning
  translateX?: number;
  translateY?: number;
};

const HomeIconWithBg: React.FC<HomeIconWithBgProps> = ({
  size = 80,
  iconSize = 26,
  iconColor = '#ffffff',
  bgColor = '#737476',
  translateX = 0,
  translateY = 0,
}) => {
  return (
    <View
      className="items-center justify-center rounded-lg border border-[#cccccc33]"
      style={{
        height: size,
        width: size,
        backgroundColor: bgColor,
      }}>
      <View
        style={{
          transform: [{ translateX: translateX }, { translateY: translateY }],
        }}>
        <HomeIcon color={iconColor} size={iconSize} />
      </View>
    </View>
  );
};

export default HomeIconWithBg;
