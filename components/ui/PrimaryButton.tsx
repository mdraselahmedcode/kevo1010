import { TouchableOpacity, Text, View } from 'react-native';

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  className?: string;
  textClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function PrimaryButton({
  title,
  onPress,
  disabled = false,
  className = '',
  textClassName = '',
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7} // press feedback
      disabled={disabled}
      className={`
        flex-row
        items-center
        justify-center
        rounded-xl
        bg-primary
        py-button
        ${disabled ? 'opacity-50' : ''}
        ${className}
      `}>
      {leftIcon && <View className="mr-2">{leftIcon}</View>}
      <Text
        className={`font-syneMeidum text-[18px] leading-[22px] tracking-[0.2px] text-text-white ${textClassName}`}>
        {title}
      </Text>
      {rightIcon && <View className="ml-2">{rightIcon}</View>}
    </TouchableOpacity>
  );
}
