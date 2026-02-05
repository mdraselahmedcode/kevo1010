import { View, ViewStyle, StyleProp } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  className?: string; // <-- added
};

export default function ShadowCard({ children, style, className }: Props) {
  return (
    <View
      className={`rounded-[8px] bg-background p-5 ${className ?? ''}`} // <-- merged className
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
