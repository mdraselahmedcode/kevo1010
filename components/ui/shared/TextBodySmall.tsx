

import React from 'react';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';

type Props = TextProps & {
  text?: string;
  style?: StyleProp<TextStyle>;
  className?: string; // for NativeWind classes
  numberOfLines?: number;
};

const TextBodySmall = ({ text, style, numberOfLines, className, ...rest }: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      className={`text-center font-nunito text-[12px] font-normal leading-[18px] tracking-[-0.17px] text-[#4B4B4B] ${className ?? ''}`}
      style={style}
      {...rest} // <-- now accepts numberOfLines, ellipsizeMode, etc.
    >
      {text ?? 'text here'}
    </Text>
  );
};

export default TextBodySmall;
