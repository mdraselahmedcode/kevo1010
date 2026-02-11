import Svg, { Path, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type IconProps = SvgProps & {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export function HomeIcon({ size = 24, color = '#000', style, ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} {...props}>
      <Path
        d="M9.2775 1.61263L16.0275 4.31261C16.29 4.41761 16.5 4.7326 16.5 5.0101V7.50011C16.5 7.91261 16.1625 8.25011 15.75 8.25011H2.25C1.8375 8.25011 1.5 7.91261 1.5 7.50011V5.0101C1.5 4.7326 1.71 4.41761 1.9725 4.31261L8.7225 1.61263C8.8725 1.55263 9.1275 1.55263 9.2775 1.61263Z"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 16.5H1.5V14.25C1.5 13.8375 1.8375 13.5 2.25 13.5H15.75C16.1625 13.5 16.5 13.8375 16.5 14.25V16.5Z"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 13.5V8.25"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 13.5V8.25"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 13.5V8.25"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 13.5V8.25"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 13.5V8.25"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M0.75 16.5H17.25"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 6.375C9.62132 6.375 10.125 5.87132 10.125 5.25C10.125 4.62868 9.62132 4.125 9 4.125C8.37868 4.125 7.875 4.62868 7.875 5.25C7.875 5.87132 8.37868 6.375 9 6.375Z"
        stroke={color}
        strokeWidth="0.8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
