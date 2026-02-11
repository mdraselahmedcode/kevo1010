import React from 'react';
import { View } from 'react-native';
import { WarningIcon } from '@/components/icons/WarningIcon';

type WarningIconWithBgProps = {
  size?: number;
  iconSize?: number;
  iconColor?: string;
  bgColor?: string;
  // New props for fine-tuning
  translateX?: number;
  translateY?: number;
};

const WarningIconWithBg: React.FC<WarningIconWithBgProps> = ({
  size = 80,
  iconSize = 26,
  iconColor = '#ffffff',
  bgColor = '#737476',
  translateX = 0,
  translateY = 0,
}) => {
  return (
    <View
      className="items-center justify-center rounded-lg border border-[#cccccc77]"
      style={{
        height: size,
        width: size,
        backgroundColor: bgColor,
      }}>
      <View
        style={{
          transform: [{ translateX: translateX }, { translateY: translateY }],
        }}>
        <WarningIcon color={iconColor} size={iconSize} />
      </View>
    </View>
  );
};

export default WarningIconWithBg;
