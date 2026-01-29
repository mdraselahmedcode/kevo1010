import React, { ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';

const FlexText = ({ children, style }: { children: ReactNode; style?: ViewStyle }) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 5,
          height: 'auto',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default FlexText;
