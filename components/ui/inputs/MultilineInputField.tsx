import React, { useState } from 'react';
import { TextInput, View, TextInputProps, TextStyle, ViewStyle } from 'react-native';
import InputLabel from '../shared/InputLabel';

type Props = TextInputProps & {
  minHeight?: number;
  required?: boolean;
  error?: boolean;
  label?: string;
  showLabel?: boolean;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onValueBlur?: (value: string) => void;
};

export default function MultilineInputField({
  value,
  onChangeText,
  placeholder = 'Please enter',
  minHeight = 120,
  required = false,
  error = false,
  label = 'Enter your',
  showLabel = false,
  inputStyle,
  containerStyle,
  onValueBlur,
  onBlur,
  ...rest
}: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={containerStyle}>
      {showLabel && (
        <InputLabel
          text={label}
          style={{
            color: error ? 'red' : '#323135',
            marginBottom: 5,
          }}
        />
      )}

      {/* ✅ Wrapper controls border + focus */}
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          borderColor: error ? 'red' : focused ? '#323135' : '#A7A5AF',
          backgroundColor: '#FFF',
          overflow: 'hidden',
        }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          multiline
          textAlignVertical="top"
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
            onValueBlur?.(value ?? '');
          }}
          style={[
            {
              minHeight,
              padding: 12,
              fontSize: 14,
              fontFamily: 'Nunito-Regular',
              color: '#111',
            },
            inputStyle, // ✅ now works
          ]}
          {...rest}
        />
      </View>
    </View>
  );
}
