import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

type IconProps = SvgProps & {
  size?: number;
  color?: string;
};

export function ArrowRightTopIcon({ size = 24, color = '#000', ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M7 17L17 7"
        stroke={color} // Use the color prop instead of hardcoded white
        strokeWidth="2" // Consider adding strokeWidth for consistency
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 7H17V17"
        stroke={color} // Use the color prop instead of hardcoded white
        strokeWidth="2" // Consider adding strokeWidth for consistency
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
