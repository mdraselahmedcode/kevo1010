import React from 'react';
import { TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { ChevronRightIcon } from '@/components/icons/chevronRightIcon';

type ProfileItemProps = {
  title: string;
  onPress: () => void;

  /** Icons */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  /** Behaviour */
  showChevron?: boolean;

  /** Styling */
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  showChevron = true,
  containerStyle,
  titleStyle,
}) => {
  const renderRightIcon = () => {
    if (rightIcon) return rightIcon;
    if (showChevron) return <ChevronRightIcon size={20} color="#4A4F61" />;
    return null;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="rounded-lg bg-white p-4 shadow-sm"
      style={containerStyle}>
      <View className="flex-row items-center justify-between">
        {/* Left */}
        <View className="flex-row items-center gap-3">
          {leftIcon && <View>{leftIcon}</View>}

          <Text
            style={[
              {
                fontFamily: 'Nunito-Medium',
                fontSize: 16,
                color: '#000',
              },
              titleStyle,
            ]}>
            {title}
          </Text>
        </View>

        {/* Right */}
        <View>{renderRightIcon()}</View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
