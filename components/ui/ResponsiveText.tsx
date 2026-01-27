// components/ui/ResponsiveText.tsx
import { Text, TextProps } from 'react-native';
import { useWindowDimensions } from 'react-native';

type Props = TextProps & {
  smClassName?: string;
  lgClassName?: string;
};

export default function ResponsiveText({
  smClassName = '',
  lgClassName = '',
  style,
  ...props
}: Props) {
  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  return <Text className={isTablet ? lgClassName : smClassName} style={style} {...props} />;
}
