import React from 'react';
import { Text, TextStyle } from 'react-native';

interface HeaderPrimaryProps {
  text: string;
  style?: TextStyle;
  numberOfLines?: number;
  color?: string;
}

const HeaderPrimary: React.FC<HeaderPrimaryProps> = ({ text, style, numberOfLines, color }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      className="font-nunitoMedium mb-6 text-[24px] leading-[33px]"
      style={{ color: color || '#323135', ...style }}>
      {text}
    </Text>
  );
};

export default HeaderPrimary;
