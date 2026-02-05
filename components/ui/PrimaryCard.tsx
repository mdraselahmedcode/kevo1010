import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string; // ✅ NativeWind support
  py?: number;
  px?: number;
};

export default function PrimaryCard({ children, style, className }: Props) {
  return (
    <View
      className={`rounded-[8px] bg-background p-5 ${className ?? ''}`}
      style={[
        {
          borderWidth: 1,
          borderColor: '#2C80EC',
          backgroundColor: '#EFF6FF',
          borderRadius: 8,
        },
        style,
      ]}>
      {children}
    </View>
  );
}
