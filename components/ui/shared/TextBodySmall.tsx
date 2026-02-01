import React from 'react';
import { Text, TextStyle } from 'react-native';

const TextBodySmall = ({ text, style }: { text?: string; style?: TextStyle }) => {
  return (
    <Text
      className="text-center font-nunito text-[12px] font-normal leading-[18px] tracking-[-0.17px] text-[#4B4B4B]  "
      style={[{}, style]}>
      {text ?? 'text here'}
    </Text>
  );
};

export default TextBodySmall;
