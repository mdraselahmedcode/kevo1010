import React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void; // Add this line
};

// Alternative SearchBar if you want both typing and clicking
export const SearchBar: React.FC<SearchBarProps & TextInputProps> = ({
  placeholder = 'Search',
  value,
  onChangeText,
  showLeftIcon = true,
  showRightIcon = true,
  style,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1} // Set to 1 to remove feedback if you want
      style={style}>
      <View
        style={[
          {
            height: 50,
            borderRadius: 20,
            backgroundColor: '#289EE8',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingHorizontal: 16,
          },
        ]}>
        {/* 🔹 Glow behind input */}
        <Svg
          pointerEvents="none"
          width="120%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}>
          <Defs>
            <RadialGradient
              id="glow"
              cx="50%"
              cy="50%"
              rx="90%"
              ry="55%"
              fx="50%"
              fy="50%"
              gradientUnits="userSpaceOnUse">
              <Stop offset="0%" stopColor="#0073FF" stopOpacity={0.7} />
              <Stop offset="40%" stopColor="#0073FF" stopOpacity={0.4} />
              <Stop offset="100%" stopColor="#fff" stopOpacity={0.3} />
            </RadialGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#glow)" />
        </Svg>

        {/* 🔹 Input row */}
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          {showLeftIcon && <Ionicons name="location-outline" size={24} color="#FFFFFF" />}
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="rgba(255,255,255,0.9)"
            value={value}
            onChangeText={onChangeText}
            style={{
              flex: 1,
              marginLeft: showLeftIcon ? 12 : 0,
              fontSize: 14,
              color: '#fff',
              fontFamily: 'Nunito-Regular',
            }}
            {...rest}
          />
          {showRightIcon && <Ionicons name="search-outline" size={24} color="#FFFFFF" />}
        </View>
      </View>
    </TouchableOpacity>
  );
};
