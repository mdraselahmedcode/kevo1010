import React from 'react';
import { View } from 'react-native';
// import { NotificationBellIcon as BellSvg } from './NotificationBellSvg'; // import your SVG component
import { BushIcon } from '@/components/icons';
type BushWithBgIconProps = {
  size?: number; // outer container size
  iconSize?: number; // inner bell icon size
  color?: string;
};

const BushWithBgIcon: React.FC<BushWithBgIconProps> = ({
  size = 80,
  iconSize = 26,
  color = '#000000',
}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'visible',
      }}>
      {/* Outer light circle */}
      <View
        style={{
          position: 'absolute',
          top: size * 0.06,
          left: size * 0.06,
          right: size * 0.06,
          bottom: size * 0.06,
          borderRadius: (size * 0.33) / 2,
          backgroundColor: '#e9ecec', // bg-sky-50
        }}
      />

      {/* Inner primary circle */}
      <View
        style={{
          position: 'absolute',
          top: size * 0.12,
          left: size * 0.12,
          right: size * 0.12,
          bottom: size * 0.12,
          borderRadius: (size * 0.76) / 2,
          backgroundColor: 'transparent', // bg-primary
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BushIcon size={iconSize} color={color} />
      </View>
    </View>
  );
};

export default BushWithBgIcon;
