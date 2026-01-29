import React from 'react';
import { Text, TextStyle } from 'react-native';

const TextBodySecondary = ({ text, style }: { text?: string; style?: TextStyle }) => {
  return (
    <Text
      className="tracking-[ -0.41px] text-center font-nunito text-[14px] font-normal leading-[23px] text-[#4B4B4B]  "
      style={[{}, style]}>
      {text ?? 'text here'}
    </Text>
  );
};

export default TextBodySecondary;
