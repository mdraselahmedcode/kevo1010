import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  KeyboardType,
} from 'react-native';
import InputLabel from '../shared/InputLabel';
import { Feather } from '@expo/vector-icons';

type FeatherIconName = React.ComponentProps<typeof Feather>['name'];

interface ShadowBorderInputFieldProps {
  keyboard: string;
  value: string;
  handler: (name: string, value: string) => void;
  name: string;

  label?: string;
  error?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  placeholder?: string;
  required?: boolean;
  showLabel?: boolean;

  /** Icon control */
  leftIconComponent?: React.ReactNode;
  leftIcon?: FeatherIconName;
  rightIcon?: FeatherIconName;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  onRightIconPress?: () => void;

  /** Textarea support */
  multiline?: boolean;
  numberOfLines?: number;

  onBlur?: (value: string) => void;
}

const ShadowBorderInputField: React.FC<ShadowBorderInputFieldProps> = ({
  keyboard,
  value,
  handler,
  name,
  label,
  error = false,
  style,
  inputStyle,
  placeholder = 'Enter address',
  multiline,
  numberOfLines,
  required = true,
  showLabel = true,
  leftIconComponent,
  leftIcon,
  rightIcon,
  showLeftIcon = false,
  showRightIcon = false,
  onRightIconPress,

  onBlur,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ width: '100%', ...style }}>
      {showLabel && (
        <InputLabel
          text={label ?? 'Service Address'}
          style={{
            color: required ? (error ? 'red' : '#323135') : '#323135',
            marginBottom: 5,
          }}
        />
      )}

      <View
        className="rounded-[8px] bg-background"
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          borderWidth: 1,
          borderColor: error ? 'red' : focused ? '#A7A5AF' : 'transparent',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 2,
        }}>
        {/* Left Icon */}
        {/* {showLeftIcon && leftIcon && (
          <Feather name={leftIcon} size={20} color="#6B7280" style={{ marginRight: 10 }} />
        )} */}
        {/* Left Icon */}
        {showLeftIcon && (leftIconComponent || leftIcon) && (
          <View style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
            {leftIconComponent ? (
              leftIconComponent
            ) : (
              <Feather name={leftIcon!} size={20} color="#6B7280" />
            )}
          </View>
        )}

        {/* Input */}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: multiline ? 12 : 14,
            color: '#323135',
            lineHeight: 22,
            textAlignVertical: multiline ? 'top' : 'center', // 👈 IMPORTANT
            minHeight: multiline ? 100 : undefined, // 👈 textarea height
            ...inputStyle,
          }}
          placeholder={placeholder}
          keyboardType={keyboard as KeyboardType}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            onBlur?.(value);
          }}
          onChangeText={(text) => handler?.(name as string, text)}
        />

        {/* Right Icon */}
        {showRightIcon && rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Feather name={rightIcon} size={20} color="#2C80EC" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ShadowBorderInputField;
