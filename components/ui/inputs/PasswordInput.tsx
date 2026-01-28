import React, { useState } from 'react';
import {
  Image,
  ImageBackgroundProps,
  KeyboardType,
  StyleSheetProperties,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import InputLabel from '../shared/InputLabel';
import { EyeOpenIcon, EyeCloseIcon } from '../../icons/index';

const PasswordInput = ({
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
  onBlur,
}: {
  keyboard: string;
  style?: StyleSheetProperties;
  inputStyle?: StyleSheetProperties;
  placeHolder?: string;
  label?: string;
  error?: boolean;
  handler?: (name: string, value: string) => void;
  value?: string;
  name?: string;
  required?: boolean;
  onBlur?: (value: string) => void;
}) => {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        position: 'relative',
        ...style,
      }}>
      <InputLabel
        style={{
          color: required ? (error ? 'red' : '#323135') : '#323135',
          marginBottom: 5,
        }}
        text={label}
      />
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(false); // ✅ blur handler
          onBlur?.(value + '');
        }}
        secureTextEntry={show}
        value={value}
        className=" relative border border-[#A7A5AF] bg-background "
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

      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 14,
          top: '50%', // move icon to 50% of parent height
          transform: [{ translateY: 0 }], // move it up by half of icon height (24/2)
        }}
        activeOpacity={0.7}
        onPress={() => setShow(!show)}>
        {show ? (
          <EyeCloseIcon size={24} color="#323135" />
        ) : (
          <EyeOpenIcon size={24} color="#323135" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
