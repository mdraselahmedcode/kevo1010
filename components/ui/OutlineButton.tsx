import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle, StyleProp } from 'react-native';

type OutlineButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  className?: string; // outer container
  textClassName?: string; // text styling
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>; // for inline styles if needed
};

export default function OutlineButton({
  title,
  onPress,
  disabled = false,
  className = '',
  textClassName = '',
  leftIcon,
  rightIcon,
  style,
}: OutlineButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      className={`flex-row items-center justify-center rounded-xl bg-background py-3 ${
        disabled ? 'opacity-50' : ''
      } ${className}`}
      style={[
        {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.15,
          shadowRadius: 2,
          elevation: 2,
          borderWidth: 1,
          borderColor: '#E5E7EB', // light gray outline
        },
        style,
      ]}>
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      <Text
        className={`font-syneMedium text-[18px] leading-[22px] tracking-[0.2px] text-primary ${textClassName}`}>
        {title}
      </Text>
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </TouchableOpacity>
  );
}
