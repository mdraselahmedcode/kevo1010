import { View, ViewStyle, StyleProp } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function ShadowCard({ children, style }: Props) {
  return (
    <View
      className="rounded-[8px] bg-background p-5"
      style={[
        {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.25,
          shadowRadius: 2,
          elevation: 2,
        },
        style,
      ]}>
      {children}
    </View>
  );
}
