// export default InputField;

import React, { useState } from 'react';
import { KeyboardType, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import InputLabel from '../shared/InputLabel';

interface InputFieldProps {
  keyboard: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  placeHolder?: string;
  label?: string;
  error?: boolean;
  handler?: (name: string, value: string) => void;
  value?: string;
  name?: string;
  required?: boolean;
  showLabel?: boolean;
  onBlur?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  keyboard,
  style,
  inputStyle,
  placeHolder = 'Please enter',
  label = 'Enter your',
  error = false,
  handler,
  value,
  name,
  required = true,
  showLabel = true,
  onBlur,
}) => {
  const [focused, setFocused] = useState(false); // ✅ new state

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        ...style,
      }}>
      {showLabel && (
        <InputLabel
          style={{
            color: required ? (error ? 'red' : '#323135') : '#323135',
            marginBottom: 5,
          }}
          text={label}
        />
      )}

      <TextInput
        onFocus={() => setFocused(true)} // ✅ focus handler
        onBlur={() => {
          setFocused(false); // ✅ blur handler
          onBlur?.(value + '');
        }}
        value={value}
        className="border border-[#A7A5AF] bg-background"
        style={{
          color: '#323135',
          lineHeight: 22,
          padding: 16,
          paddingVertical: 14,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: error
            ? 'red'
            : focused
              ? '#323135' // ✅ dark border when focused
              : '#A7A5AF', // default border
          ...inputStyle,
        }}
        placeholder={placeHolder}
        keyboardType={keyboard as KeyboardType}
        onChangeText={(text) => handler?.(name as string, text)}
      />
    </View>
  );
};

export default InputField;
