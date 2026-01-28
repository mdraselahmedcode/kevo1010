import React from 'react';
import { Text, TextStyle } from 'react-native';

interface InputLabelProps {
  text: string;
  style?: TextStyle;
  numberOfLines?: number;
}

const InputLabel: React.FC<InputLabelProps> = ({ text, style, numberOfLines }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      className="mb-1 font-nunitoSemi text-[16px] leading-[18px] tracking-[-0.165px]"
      style={{
        ...style,
      }}>
      {text ?? 'text here'}
    </Text>
  );
};

export default InputLabel;
