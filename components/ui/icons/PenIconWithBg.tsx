import React from 'react';
import { View } from 'react-native';
import { PenIcon } from '@/components/icons/PenIcon';

type PenIconWithBgProps = {
  size?: number;
  iconSize?: number;
  iconColor?: string;
  bgColor?: string;
  // New props for fine-tuning
  translateX?: number;
  translateY?: number;
};

const PenIconWithBg: React.FC<PenIconWithBgProps> = ({
  size = 80,
  iconSize = 26,
  iconColor = '#ffffff',
  bgColor = '#737476',
  translateX = 0,
  translateY = 0,
}) => {
  return (
    <View
      className="items-center justify-center rounded-full border border-[#cccccc33]"
      style={{
        height: size,
        width: size,
        backgroundColor: bgColor,
      }}>
      <View
        style={{
          transform: [{ translateX: translateX }, { translateY: translateY }],
        }}>
        <PenIcon color={iconColor} size={iconSize} />
      </View>
    </View>
  );
};

export default PenIconWithBg;
