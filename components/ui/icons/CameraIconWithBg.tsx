import React from 'react';
import { View } from 'react-native';
import { CameraIcon } from '@/components/icons/CameraIcon';

type CameraIconWithBgProps = {
  size?: number; // outer container size
  iconSize?: number; // inner camera icon size
  color?: string;
  borderColor?: string;
  outerBg?: string;
  innerBg?: string;
  iconTop?: number;
  iconRight?: number;
};

const CameraIconWithBg: React.FC<CameraIconWithBgProps> = ({
  size = 80,
  iconSize = 26,
  color = '#000000',
  borderColor = '#D8D9DB',
  outerBg = 'white',
  innerBg = 'transparent',
  iconTop = 4,
  iconRight = 1,
}) => {
  const outerCircleSize = size;
  const innerCircleSize = outerCircleSize * 0.76; // inner circle ~76% of outer
  const borderWidth = 4;

  return (
    <View
      style={{
        width: outerCircleSize,
        height: outerCircleSize,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Outer circle with border */}
      <View
        style={{
          width: outerCircleSize,
          height: outerCircleSize,
          borderRadius: outerCircleSize / 2,
          backgroundColor: outerBg,
          borderWidth: borderWidth,
          borderColor: borderColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Inner circle */}
        <View
          style={{
            width: innerCircleSize,
            height: innerCircleSize,
            borderRadius: innerCircleSize / 2,
            backgroundColor: innerBg,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CameraIcon
            style={{ position: 'absolute', top: iconTop, right: iconRight }}
            size={iconSize}
            color={color}
          />
        </View>
      </View>
    </View>
  );
};

export default CameraIconWithBg;
