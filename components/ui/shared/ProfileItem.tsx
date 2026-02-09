// components/ui/ProfileItem.tsx
import React from 'react';
import { TouchableOpacity, View, Text, StyleProp, ViewStyle } from 'react-native';
import { ChevronRightIcon } from '@/components/icons/chevronRightIcon';

type ProfileItemProps = {
  title: string;
  onPress: () => void;
  showChevron?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const ProfileItem: React.FC<ProfileItemProps> = ({
  title,
  onPress,
  showChevron = true,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="rounded-lg bg-white p-4 shadow-sm"
      style={containerStyle}>
      <View className="flex-row items-center justify-between">
        <Text style={{ fontFamily: 'Nunito-Medium', fontSize: 16, color: '#000' }}>{title}</Text>
        {showChevron && <ChevronRightIcon size={20} color="#4A4F61" />}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileItem;
